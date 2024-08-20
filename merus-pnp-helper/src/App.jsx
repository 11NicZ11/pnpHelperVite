import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JohnsRoomMate from "./pages/JohnsRoomMate";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/char1" element={<JohnsRoomMate />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
