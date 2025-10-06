import React, { useState } from "react";

const API_URL = "http://localhost:3500/api/auth";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!userName || !email || !password) {
      setMessage("form fields are required");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userName, email, role, password }),
      });
      const data = await res.json();
      setMessage(data.message || JSON.stringify(data));
    } catch (err) {
      console.error(err);
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <form>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Role:</label>
        <input
          type="text"
          id="password"
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Email:</label>
        <input
          type="email"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
