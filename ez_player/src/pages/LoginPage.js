import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { login } from "api";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await login(username, password);
    // จัดการผลลัพธ์ที่ได้จากการเข้าสู่ระบบ
  };

  return (
    <Container>
      <Typography variant="h4">เข้าสู่ระบบ</Typography>
      <form>
        <TextField
          label="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="รหัสผ่าน"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          เข้าสู่ระบบ
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
