// VideoCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  return (
    <Card onClick={handleClick} style={{ cursor: 'pointer' }}>
      <CardMedia component="img" height="140" image={video.thumbnailUrl} />
      <CardContent>
        <Typography variant="h6">{video.title}</Typography>
        <Typography variant="body2">{video.description}</Typography>
      </CardContent>
    </Card>
 );
};

export default VideoCard;