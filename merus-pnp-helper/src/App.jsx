import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import JohnsRoomMate from "./pages/JohnsRoomMate.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/char1" element={<JohnsRoomMate />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
