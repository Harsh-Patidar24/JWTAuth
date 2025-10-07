import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
      try {
        const response = await api.post("/api/protected");
        if (!response.data.ok) {
          localStorage.removeItem("token");
          navigate("/");
          return;
        }
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    };
    verifyToken();
  }, []);
  if (loading) return <div>loading......</div>;

  return <div>dashboard</div>;
}

export default dashboard;
