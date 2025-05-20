// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SubmitStory from "./pages/SubmitStory";
import ReadStories from "./pages/ReadStories";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="navbar">
        <h1 className="logo">Menstrual Reviews</h1>
        <nav className="toolbar">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>🏠 Home</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>🔐 Login</NavLink>
          <NavLink to="/submit" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>✍️ Share Your Story</NavLink>
          <NavLink to="/stories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>📚 Explore Stories</NavLink>
          <NavLink to="/info" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>💡 Menstrual Info</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>📞 Contact Us</NavLink>
        </nav>
      </div>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submit" element={<SubmitStory />} />
          <Route path="/stories" element={<ReadStories />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
