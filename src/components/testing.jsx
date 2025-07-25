import React from 'react';
import { Card, CardMedia } from '@mui/material';
import './WorldMap.css'; // you can customize here

const imageUrls = [
  'https://source.unsplash.com/random/300x200?sig=1',
  'https://source.unsplash.com/random/300x200?sig=2',
  'https://source.unsplash.com/random/300x200?sig=3',
  'https://source.unsplash.com/random/300x200?sig=4',
  'https://source.unsplash.com/random/300x200?sig=5',
  'https://source.unsplash.com/random/300x200?sig=6',
  'https://source.unsplash.com/random/300x200?sig=7',
  'https://source.unsplash.com/random/300x200?sig=8',
  'https://source.unsplash.com/random/300x200?sig=9',
  'https://source.unsplash.com/random/300x200?sig=10',
];

const ImageCardContainer = () => {
  return (
    <div className="card-container" >
      {imageUrls.map((url, index) => (
        <Card className="image-card" key={index}>
          <CardMedia
            component="img"
            height="200"
            image={url}
            alt={`Random Unsplash ${index + 1}`}
          />
        </Card>
      ))}
    </div>
  );
};

export default ImageCardContainer;
