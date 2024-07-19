export async function GET(req, res) {
    const api = process.env.NEXT_PUBLIC_CMC_API_KEY;
    const baseurl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
    console.log(process.env.NEXT_PUBLIC_CMC_API_KEY);
  
    try {
      const response = await fetch(baseurl, {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_CMC_API_KEY,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  }
  