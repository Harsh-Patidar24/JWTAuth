import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

// const API_URL = "http://localhost:3500/api/auth";

const LoginForm = () => {
  // ✅ Hooks must be inside component
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName || !password) {
      setMessage("Please enter username and password.");
      return;
    }

    try {
      const response = await api.post("/api/auth/login", {
        userName,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: "20px" }}>
      <h2>Login</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
};

export default LoginForm;
