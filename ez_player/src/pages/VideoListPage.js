// VideoListPage.js
import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VideoCard from 'components/VideoCard';
import {getVideos} from 'api';

const VideoListPage = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchVideos = async () => {
        const result = await getVideos(); // ใช้ฟังก์ชัน getVideos ที่สร้างด้านบน
        setVideos(result);
      };
  
      fetchVideos();
    }, []);
  
    const handleUpload = () => {
      if (!localStorage.getItem('token')) {
        // ถ้าไม่มี token ใน localStorage ให้นำผู้ใช้ไปยังหน้าเข้าสู่ระบบ
        navigate('/login');
      } else {
        // ถ้ามี token ให้นำผู้ใช้ไปยังหน้าอัปโหลดวิดีโอ
        navigate('/upload');
      }
    };
  
    return (
      <Container>
        <Typography variant="h4">รายการวิดีโอ</Typography>
        <Grid container spacing={3}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" color="primary" onClick={handleUpload}>
          อัปโหลดวิดีโอ
        </Button>
      </Container>
    );
  };
  
  export default VideoListPage;
