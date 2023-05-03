// VideoPlayerPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getVideoById} from 'api'

const VideoPlayerPage = () => {
  const { videoId } = useParams(); // อ่าน videoId จากพารามิเตอร์ของเส้นทาง
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const result = await getVideoById(videoId); // ใช้ฟังก์ชัน getVideoById ที่สร้างด้านบน
      setVideo(result);
    };

    fetchVideo();
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{video.title}</h1>
      <video src={video.url} controls width="100%" />
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayerPage;
