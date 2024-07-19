// Hero.js

"use client";
import { Card, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Typography, Skeleton, IconButton, Button, Box } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
import { format } from 'date-fns';


TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
const timeAgo = new TimeAgo('en-US');

const Hero = () => {
  const { isDarkmode, cryptoData, isLoading, addToWatchlist, removeFromWatchlist, watchlist } = useContext(AppContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDragStart = (crypto) => {
    setDraggedItem(crypto);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem) {
      addToWatchlist(draggedItem);
      setDraggedItem(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDelete = (id) => {
    removeFromWatchlist(id);
  };
  const filteredCryptoData = cryptoData.filter(crypto => ['BTC', 'ETH', 'SOL'].includes(crypto.symbol));

  const chartData = filteredCryptoData.map(crypto => ({
    name: crypto.symbol,
    marketcap: crypto.quote?.USD?.market_cap || 0,
    timee: format(new Date(crypto.quote?.USD?.last_updated), 'p'),
  }));


  const formatMarketCap = (marketCap) => {
    return (marketCap / 1e6).toFixed(2) + 'M';
  };

  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  return (
    <Stack flexDirection={{lg:"row" , xs:"column"}} gap="1em" flexWrap={{lg:"nowrap" , xs:"wrap"}} >
      <Stack flexDirection="column"width={{lg:"70%"  , sm:"100%" , xs:"300px"}} gap="1em" flexGrow={{lg:"none" , xs:"1"}}>
        {isLoading ? (
          <Card sx={{ height: "60vh", background: isDarkmode ? '#121212' : '#fff', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
          </Card>
        ) : (
          <Card sx={{ height: "60vh", background: isDarkmode ? '#121212' : '#fff', display: 'flex', justifyContent: "center", alignItems: "center" }}>
           <ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={chartData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="timee" />
    <YAxis dataKey="marketcap" />
    <Tooltip
      formatter={(value, name, props) => [value, props.payload.name]}
      labelFormatter={(label) => `Time: ${label}`}
    />
    <Legend />
    <Line type="monotone" dataKey="marketcap" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
</ResponsiveContainer>

          </Card>
        )}
        <Card sx={{ maxHeight: "50vh", background: isDarkmode ? '#121212' : '#fff', overflow: "scroll" }}>
          {isLoading ? (
            <Skeleton animation="wave" variant="rectangular" width="100%" height="40vh" />
          ) : (
            <TableContainer component={Paper} sx={{ background: isDarkmode ? '#121212' : '#fff' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: isDarkmode ? '#e2e2e2' : '#7e7e7e' }}>Token</TableCell>
                    <TableCell sx={{ color: isDarkmode ? '#e2e2e2' : '#7e7e7e' }}>Symbol</TableCell>
                    <TableCell sx={{ color: isDarkmode ? '#e2e2e2' : '#7e7e7e' }}>24H Change</TableCell>
                    <TableCell sx={{ color: isDarkmode ? '#e2e2e2' : '#7e7e7e' }}>Market Cap</TableCell>
                    <TableCell sx={{ color: isDarkmode ? '#e2e2e2' : '#7e7e7e' }}>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cryptoData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((crypto) => (
                    <TableRow key={crypto.id} draggable onDragStart={() => handleDragStart(crypto)}>
                      <TableCell sx={{ color: isDarkmode ? '#fff' : '#121212', fontWeight: "700", fontSize: "17px" }}>{crypto.name}</TableCell>
                      <TableCell sx={{ color: isDarkmode ? '#fff' : '#121212', fontWeight: "700", fontSize: "17px" }}>{crypto.symbol}</TableCell>
                      <TableCell sx={{ color: isDarkmode ? '#fff' : '#121212', fontWeight: "700", fontSize: "17px" }}>
                        {crypto.quote.USD.volume_change_24h < 0 ? (
                          <Typography component="span" sx={{ color: '#ff2e2e', display: 'flex', alignItems: 'center', gap: "0.5em" }}>
                            <ArrowDownwardIcon sx={{ fontSize: 'small', color: '#ff2e2e' }} />
                            {crypto.quote.USD.volume_change_24h.toFixed(2)}
                          </Typography>
                        ) : (
                          <Typography component="span" sx={{ color: '#2bc155', display: 'flex', alignItems: 'center', gap: "0.5em" }}>
                            <ArrowUpwardIcon sx={{ fontSize: 'small', color: '#2bc155' }} />
                            {crypto.quote.USD.volume_change_24h.toFixed(2)}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell sx={{ color: isDarkmode ? '#fff' : '#121212', fontWeight: "700", fontSize: "17px" }}>{formatMarketCap(crypto.quote.USD.market_cap)}</TableCell>
                      <TableCell sx={{ color: '#2bc155', fontWeight: "700", fontSize: "17px" }}>${formatPrice(crypto.quote.USD.price)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
  rowsPerPageOptions={[5]}
  component="div"
  count={cryptoData.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
  sx={{
    '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
      color: isDarkmode ? '#e2e2e2' : '#7e7e7e',
    },
    '.MuiTablePagination-actions svg': {
      color: isDarkmode ? '#e2e2e2' : '#7e7e7e',
    },
  }}
/>

            </TableContainer>
          )}
        </Card>
      </Stack>
      <Stack flexDirection="column" width={{lg:"30%" , xs:"auto"}} gap="1em" flexGrow={{lg:"none" , xs:"1"}}>
        <Card
          sx={{ maxHeight: "100vh", minHeight: "20vh", padding: "1em 1em", background: isDarkmode ? '#121212' : '#fff', overflowY: "scroll", display: "flex", flexDirection: "column" }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Button variant="contained" sx={{ color: '#f5f5f5', textAlign: 'center', background: "#6418c3 !important", alignSelf: "flex-end", marginBottom: "0.5em" }}>
            Watchlist
          </Button>
          {isLoading ? (
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '60%' }}>
              <Typography variant="body1" sx={{ color: isDarkmode ? '#b0b0b0' : '#616161' }}>
                Watchlist Loading...
              </Typography>
              <Skeleton animation="wave" variant="rectangular" width="100%" height="60%" />
            </Stack>
          ) : (
            <Stack flexDirection='column' gap='0.7em'>
              {watchlist.length > 0 ? (
                watchlist.map((crypto) => (
                  <Card key={crypto.id} sx={{ width: "100%", padding: '1em', background: isDarkmode ? '#1e1e1e' : '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Stack>
                      <Typography variant="h7" sx={{ color: isDarkmode ? '#e2e2e2' : '#121212' }}>
                        {crypto.name} ({crypto.symbol})
                      </Typography>
                      <Typography variant="body2" sx={{ color: isDarkmode ? '#b0b0b0' : '#616161' }}>
                        Price: ${crypto.quote?.USD?.price ? formatPrice(crypto.quote.USD.price) : 'N/A'}
                      </Typography>
                      <Typography variant="body2" sx={{ color: isDarkmode ? '#b0b0b0' : '#616161' }}>
                        Market Cap: {crypto.quote?.USD?.market_cap ? formatMarketCap(crypto.quote.USD.market_cap) : 'N/A'}
                      </Typography>
                      <Typography variant="body2" sx={{ color: isDarkmode ? '#b0b0b0' : '#616161' }}>
                        Recently Viewed: {timeAgo.format(new Date(crypto.viewedAt))}
                      </Typography>
                    </Stack>
                    <IconButton onClick={() => handleDelete(crypto.id)} style={{ marginLeft: '1em' }}>
                      <DeleteIcon sx={{ color: "#ff2e2e" }} />
                    </IconButton>
                  </Card>
                ))
              ) : (
                <Typography variant="body1" sx={{ color: isDarkmode ? '#b0b0b0' : '#616161', textAlign: 'center', marginTop: '1em' }}>
                  No items in watchlist
                </Typography>
              )}
            </Stack>
          )}
        </Card>
      </Stack>
    </Stack>
  );
};

export default Hero;
