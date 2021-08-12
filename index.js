const express = require('express');
const axios = require('axios');

const app = express();
PORT = process.env.PORT || 5000;

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

//home
app.get('/', (_, res) => {
  res.send('Api here ........')
})

//get product details
app.get('/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { apiKey } = req.query;
    const response = await axios.get(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/dp/${productId}`);
    res.json(response.data)
  } catch (error) {
    res.json({ error });
  }
})


//get product reviews
app.get('/products/:productId/reviews', async (req, res) => {
  try {
    const { productId } = req.params;
    const { apiKey } = req.query;
    const response = await axios.get(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/product-reviews/${productId}`);
    res.json(response.data)
  } catch (error) {
    res.json({ error });
  }
})

//get product Offers
app.get('/products/:productId/offers', async (req, res) => {
  try {
    const { productId } = req.params;
    const { apiKey } = req.query;
    const response = await axios.get(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
    res.json(response.data)
  } catch (error) {
    res.json({ error });
  }
})

//get search result
app.get('/search/:searchQuery', async (req, res) => {
  try {
    const { searchQuery } = req.params;
    const { apiKey } = req.query;
    const response = await axios.get(`${generateScraperUrl(apiKey)}&url=https://www.amazon.com/s?k=${searchQuery}`);
    res.json(response.data)
  } catch (error) {
    res.json({ error });
  }
})


app.listen(PORT, () => console.log(`Server Ready on ${PORT}`))