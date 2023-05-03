// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import VideoListPage from 'pages/VideoListPage';
import UploadVideoPage from 'pages/UploadVideoPage';
import VideoPlayerPage from 'pages/VideoPlayerPage';
import Header from 'components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<VideoListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/upload" element={<UploadVideoPage />} />
            <Route path="/video/:id" element={<VideoPlayerPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;