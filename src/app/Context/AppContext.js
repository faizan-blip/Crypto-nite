"use client"

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);

  const toggleDarkMode = (checked) => {
    setIsDarkmode(checked);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/coinmarket');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Log to check the structure
      const updatedCryptoData = data.data.map(crypto => ({
        ...crypto,
        last_updated: new Date(crypto.last_updated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));
      setCryptoData(updatedCryptoData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const savedWatchlist = localStorage.getItem('watchlist');
    if (savedWatchlist) {
      const parsedWatchlist = JSON.parse(savedWatchlist).map(item => ({
        ...item,
        viewedAt: item.viewedAt ? new Date(item.viewedAt) : null
      }));
      setWatchlist(parsedWatchlist);
    }
  }, []);

  const addToWatchlist = (crypto) => {
    setWatchlist((prev) => {
      const itemExists = prev.some(item => item.id === crypto.id);
      if (!itemExists) {
        const updatedWatchlist = [...prev, { ...crypto, viewedAt: new Date().toISOString() }];
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        return updatedWatchlist;
      }
      return prev;
    });
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => {
      const updatedWatchlist = prev.filter(item => item.id !== id);
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  const value = {
    isDarkmode,
    setIsDarkmode,
    toggleDarkMode,
    cryptoData,
    isLoading,
    addToWatchlist,
    removeFromWatchlist,
    watchlist
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
