import express from 'express';
import axios from 'axios';
import path from 'path';

// Require and configure .env where api key is defined
require('dotenv').config();

// Custom Axios instance with to prevent repetition when app is scaled larger
// and it fetches info from multiple api endpoints
const axiosInstance = axios.create({
  method: 'GET',
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': `Client-ID ${process.env.API_KEY}`
  },
  params: {
    per_page: 30
  }
});

const app = express();

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/photos/:id', async (req, res) => {
  console.log('in server to get single photo: ', req.url);
  try {
    // Fetch photo using the same query path as request
    const response = await axiosInstance.get(req.url);
    console.log('GET ', req.url);
    console.log(response.data);
    //console.log(response.data);
    res.send(response.data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

/* Keep API key hidden from front end by getting data from API here and
 * sending only the response data to front end
 */
app.get('/photos', async (req, res) => {
  try {
    // Get page query parameter from request
    let pageNumber = req.query.page;

    // Fetch photos from right page using page query parameter
    const response = await axiosInstance.get('/photos', {
      params: {
        page: pageNumber
      }
    });
    console.log('GET /photos');
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
  console.log(`Server is running on port ${port}`);
});