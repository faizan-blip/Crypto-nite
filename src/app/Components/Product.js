"use client";
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { Card, Typography, CircularProgress, Stack , Button ,IconButton, Skeleton} from '@mui/material';
import { AppContext } from '../Context/AppContext';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
const timeAgo = new TimeAgo('en-US');

const Product = () => {
    const router = usePathname();
    const { isDarkmode, cryptoData, isLoading, removeFromWatchlist, watchlist } = useContext(AppContext);

    const extractId = () => {
        if (router.startsWith('/explore/')) {
            return router.split('/').pop();
        }
        return null;
    };

    const [id, setId] = useState(null);
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const extractedId = extractId();
        setId(extractedId);
    }, [router]);

    useEffect(() => {
        if (id) {
            const fetchData = () => {
                const data = cryptoData.find(crypto => crypto.id == id);
                setProductData(data);
                setLoading(false);
            };

            fetchData();
        }
    }, [id, cryptoData]);

    if (loading) return(
        <>
        <Stack height='100vh'>
        <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
        </Stack>
        </>
    );

    if (!productData) return <Typography>Data Loading..</Typography>;

    const chartData = [
        {
            name: productData.symbol,
            price: productData.quote?.USD?.price || 0,
            timee: format(new Date(productData.quote?.USD?.last_updated), 'p'),
        }
    ];
    const handleDelete = (id) => {
        removeFromWatchlist(id);
      };

      const formatMarketCap = (marketCap) => {
        return (marketCap / 1e6).toFixed(2) + 'M';
      };
    
      const formatPrice = (price) => {
        return price.toFixed(2);
      };
    return (
        <>
            <Stack flexDirection={{lg:"row" , xs:"column"}} gap="1em" height='100vh' flexWrap={{lg:"nowrap" , xs:"wrap"}}>
                <Stack flexDirection="column" width={{ lg: "70%", xs: "auto" }} gap="1em" flexGrow={{lg:"none" , xs:"1"}}>
                    <Stack flexDirection='row' gap="1em" width='100%'>
                   
                    <Card sx={{ display: "flex", flexDirection: "column", padding: "1.5em 1.5em" , background:isDarkmode ? '#121212' : '#fff' ,width:"100%"}}>
                        <Stack flexDirection='column' >
                        <Typography variant="h6" color='#6418c3' fontWeight='700'>{productData.name}</Typography>
                        <Stack flexDirection='row' gap='0.5em' alignItems='center'>
                            <Typography variant="h7" color={isDarkmode ? '#fff' : '#121212'} fontWeight="700">${productData.quote?.USD?.price.toFixed(2)}</Typography>
                            {productData.quote.USD.volume_change_24h < 0 ? (
                                <Typography component="span" sx={{ color: '#ff2e2e', display: 'flex', alignItems: 'center', gap: "0.5em", background: "#fff0f0", padding: "0.5em 0.5em"  , borderRadius:"10px"}}>
                                    <ArrowDownwardIcon sx={{ fontSize: 'small', color: '#ff2e2e' }} />
                                    {productData.quote.USD.percent_change_24h.toFixed(2)} % Today
                                </Typography>
                            ) : (
                                <Typography component="span" sx={{ color: '#2bc155', display: 'flex', alignItems: 'center', gap: "0.5em", background: "#e7faec", padding: "0.5em 0.5em" , borderRadius:"10px" }}>
                                    <ArrowUpwardIcon sx={{ fontSize: 'small', color: '#2bc155' }} />
                                    {productData.quote.USD.percent_change_24h.toFixed(2)} % Today
                                </Typography>
                            )}
                        </Stack>
                        </Stack>
                        <Stack flexDirection='column' gap='0.5em'  marginTop='0.7em'>
                        <Typography variant="body2" color= {isDarkmode ? '#e2e2e2' : '#7e7e7e'} fontWeight="700">
  Market Cap : ${Math.round(productData.quote.USD.market_cap)}
</Typography>
<Typography variant="body2" color= {isDarkmode ? '#e2e2e2' : '#7e7e7e'} fontWeight="700">
  Fully Diluted Valuation : ${Math.round(productData.quote.USD.fully_diluted_market_cap)}
</Typography>
<Typography variant="body2" color= {isDarkmode ? '#e2e2e2' : '#7e7e7e'} fontWeight="700">
  24 Hour Trading Vol : ${Math.round(productData.quote.USD.volume_24h)}
</Typography>
<Typography variant="body2" color= {isDarkmode ? '#e2e2e2' : '#7e7e7e'} fontWeight="700">
  Total Supply : {Math.round(productData.total_supply)}
</Typography>
<Typography variant="body2" color= {isDarkmode ? '#e2e2e2' : '#7e7e7e'} fontWeight="700">
  Max Supply : {Math.round(productData.max_supply)}
</Typography>
<Typography variant="body2" color= {isDarkmode ? '#e2e2e2' : '#7e7e7e'} fontWeight="700">
  Circulated Supply : {Math.round(productData.circulating_supply)}
</Typography>

                        </Stack>
                    </Card>
                
                    </Stack>
                    <Card sx={{ height: "60vh", background: isDarkmode ? '#121212' : '#fff', display: 'flex', justifyContent: "center", alignItems: "center"  , padding:"0.5em 0.5em",flexGrow:{lg:"none" , xs:"1"}}}>
                    <ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={chartData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="timee" />
    <YAxis dataKey="price" />
    <Tooltip
      formatter={(value, name, props) => [value, props.payload.name]}
      labelFormatter={(label) => `Time: ${label}`}
    />
    <Legend />
    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
</ResponsiveContainer>
                    </Card>
                </Stack>
                <Stack flexDirection="column" width={{lg:"30%" , xs:"auto"}} gap="1em" flexGrow={{lg:"none" , xs:"1"}}>
        <Card
          sx={{ maxHeight: "100vh", minHeight: "20vh", padding: "1em 1em", background: isDarkmode ? '#121212' : '#fff', overflowY: "scroll", display: "flex", flexDirection: "column" }}
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
        </>
    );
};

export default Product;
