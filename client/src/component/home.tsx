import React, { useState } from "react";
import LoginForm from "./login-axios";
import RegisterForm from "./register-axios";

const Home = () => {
  const [showLogin, setShowLogin] = useState(true); // toggle state

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <button
          onClick={() => setShowLogin(true)}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: showLogin ? "#007bff" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: !showLogin ? "#007bff" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>

      {showLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default Home;
