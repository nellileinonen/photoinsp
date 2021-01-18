import express from 'express';
import axios from 'axios';
import path from 'path';

// Require and configure .env where api key is defined
require('dotenv').config();

const app = express();

console.log(path.join(__dirname, '/client/build'));
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', (req, res) => {
  res.send('GET /');
});

app.get('/photos', async (req, res) => {
  try {
    // Keep API key hidden from client by fetching data from API here and
    // sending back only the response data
    const response = await axios.get('https://api.unsplash.com/photos/', {
      headers: {
        'Authorization': `Client-ID ${process.env.API_KEY}`
      }
    });
    console.log('GET /photos');
    res.send(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});