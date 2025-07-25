import React from 'react';
import { Card, CardMedia } from '@mui/material';
import './WorldMap.css'; // you can customize here
import gif1 from '../assets/gif1.gif';

const imageUrls = [
   gif1,
  'https://picsum.photos/300/200?random=1',
  'https://picsum.photos/300/200?random=2',
  'https://picsum.photos/300/200?random=3',
   gif1,
  'https://picsum.photos/300/200?random=4',
   gif1,
  'https://picsum.photos/300/200?random=5',
   gif1,
  'https://picsum.photos/300/200?random=7',
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
