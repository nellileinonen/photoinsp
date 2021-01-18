import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
  const [thumbnails, setThumbnails] = useState<{id: string, thumb: string, alt: string}[]>([]);

  useEffect(() => {
    axios.get('/photos')
    .then(response => {
      let data = response.data;

      console.log(data);

      let thumbs = data.map((item: any) => (
        {
          'id': item.id,
          'thumb': item.urls.thumb,
          'alt': item.alt_description
        }
      ));

      console.log(thumbs);

      setThumbnails(thumbs);
    });
  }, []);

  return (
    <div className="App">
      <h1>Photoinsp</h1>
      {thumbnails.map(photo => (
        <img
          key={photo.id}
          src={photo.thumb}
          alt={photo.alt}
        />
      ))}
    </div>
  );
}

export default App;
