# Cryptonite Dashboard

**Cryptonite Dashboard** is a cryptocurrency tracking web application built with Next.js 14 and integrated with the CoinMarketCap API and ECharts. It provides real-time updates on cryptocurrency prices, market trends, and detailed information on individual cryptocurrencies.

## Features

### Homepage
- **GlobalMarketCapChart:** Displays a line/candle graph showing the global market cap data for cryptocurrencies.
- **PublicCompaniesHoldings:** Provides information about public companies holding Bitcoin and Ethereum.

### Explore Page
- **PaginatedCoinList/Grid:** Shows a paginated list or grid of cryptocurrencies. Each page contains a specified number (20 items) of items with navigation to load more.
- **Navigation:** Clicking on a card routes the user to the product page of the selected cryptocurrency.

### Product Page
- **Basic Cryptocurrency Information:** Displays basic details about the selected cryptocurrency.
- **Price Graph:** Shows a candle/line graph of the cryptocurrency’s price over time.

### Common Header
- **Application Name:** Displays the name of the application.
- **Draggable Watchlist:** Allows users to easily add coins to their watchlist using drag-and-drop functionality provided by `react-draggable`.
- **Recently Viewed:** Displays recently viewed cryptocurrencies using `react-time-ago`.

## Technologies Used
- **Next.js 14**: Framework for server-side rendering and static site generation.
- **ECharts**: For interactive charts and visualizations.
- **CoinMarketCap API**: For fetching real-time cryptocurrency data.
- **react-draggable**: For drag-and-drop functionality in the watchlist.
- **react-time-ago**: For displaying recently viewed items with time ago format.
