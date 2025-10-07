import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/home";
import Dashboard from "./component/dashboard-axios";
import ProtectedRoute from "./component/ProtectedRoute";

// Route objects
const routeConfig = [
  { path: "/", element: <Home /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];

const App = () => {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;


















// import { useState } from "react";
// import { useSocket } from "./hooks/useSocket";

// function App() {
//   const [message, setMessage] = useState("");
//   const [roomInput, setRoomInput] = useState("");
//   const { isConnected, messages, currentRoom, joinRoom, leaveRoom, sendMessage } = useSocket();

//   const handleRoomJoin = () => {
//     if (roomInput.trim()) {
//       joinRoom(roomInput.trim());
//       setRoomInput("");
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     sendMessage(message);
//     setMessage("");
//   };

//   return (
//     <div style={{ padding: "1rem", background: "#333", color: "#fff", height: "80vh", width: "80rem", margin: 20  }}>
//       <h1>Chat App</h1>
//       <p>Status: {isConnected ? "🟢 Online" : "🔴 Offline"}</p>
//       <p>Current Room: {currentRoom || "None"}</p>
    

//       {/* Room Join/Create */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
//         <input
//           type="text"
//           value={roomInput}
//           onChange={(e) => setRoomInput(e.target.value)}
//           placeholder="Enter room name"
//           style={{ flex: 1, borderRadius: "8px", padding: "10px" }}
//         />
//         <button
//           onClick={handleRoomJoin}
//           style={{
//             borderRadius: "8px",
//             padding: "10px 20px",
//             background: "#555",
//             color: "#fff",
//             border: "none",
//           }}
//         >
//           Join/Create Room
//         </button>
//         {currentRoom && (
//           <button
//             onClick={leaveRoom}
//             style={{
//               borderRadius: "8px",
//               padding: "10px 20px",
//               background: "#aa3333",
//               color: "#fff",
//               border: "none",
//             }}
//           >
//             Leave Room
//           </button>
//         )}
//       </div>

//       {/* Message Form */}
//       <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Your message"
//           style={{ flex: 1, borderRadius: "8px", padding: "10px" }}
//           disabled={!currentRoom}
//         />
//         <button
//           type="submit"
//           disabled={!currentRoom}
//           style={{
//             borderRadius: "8px",
//             padding: "10px 20px",
//             background: currentRoom ? "#555" : "#999",
//             color: "#fff",
//             border: "none",
//           }}
//         >
//           Send
//         </button>
//       </form>

//       {/* Messages */}
//       <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
//         {messages.map((msg, index) => (
//           <li key={index} style={{ margin: "5px 0" }}>
//             {msg}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// ---------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [file, setFile] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState<string>("");

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const res = await axios.post("http://localhost:3500/api/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setImageUrl(res.data.url); // Save Cloudinary URL to state
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h1>Upload Image</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
//         Upload
//       </button>

//       {imageUrl && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Uploaded Image:</h2>
//           <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "300px" }} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
