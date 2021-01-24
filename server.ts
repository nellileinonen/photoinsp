import express from 'express';
import axios from 'axios';
import path from 'path';

// Require and configure .env where api key is defined
require('dotenv').config();

/*
 * Custom Axios instance to prevent repetition when the app is scaled larger
 * and it fetches info from multiple api endpoints
 */
const axiosInstance = axios.create({
  method: 'GET',
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': `Client-ID ${process.env.API_KEY}`
  }
});

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
}

app.get('/photolist/:id', async (req, res) => {
  try {
    const photoId = req.params.id;
    const response = await axiosInstance.get(`/photos/${photoId}`);
    console.log('GET ', req.url);
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get('/photolist', async (req, res) => {
  try {
    // Get page query parameter from request
    const pageNumber = req.query.page;

    // Fetch photos from right page using page query parameter
    const response = await axiosInstance.get('/photos', {
      params: {
        per_page: 30,
        page: pageNumber
      }
    });
    console.log('GET ', req.url);
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
