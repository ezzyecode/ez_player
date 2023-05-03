// UploadVideoPage.js
import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Snackbar,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { uploadVideo } from "api";

const UploadVideoPage = () => {
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    url: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setVideoData({ ...videoData, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await uploadVideo(videoData, token);
      setAlertSeverity("success" + {result});
      setAlertMessage("อัปโหลดวิดีโอสำเร็จ");
      setOpenSnackbar(true);
    } catch (error) {
      setAlertSeverity("error");
      setAlertMessage("การอัปโหลดวิดีโอล้มเหลว");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4">อัปโหลดวิดีโอ</Typography>
      <form>
        <TextField
          label="ชื่อ"
          name="title"
          value={videoData.title}
          onChange={handleChange}
        />
        <TextField
          label="คำอธิบาย"
          name="description"
          value={videoData.description}
          onChange={handleChange}
        />
        <TextField
          label="URL"
          name="url"
          value={videoData.url}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleUpload}>
          อัปโหลดวิดีโอ
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UploadVideoPage;
