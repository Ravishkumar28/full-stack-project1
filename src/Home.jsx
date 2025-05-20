// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // We'll create this next

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Menstrual Voices</h1>
          <p>Read, share, and learn about menstruation without stigma.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/stories")}>📚 Explore Stories</button>
            <button onClick={() => navigate("/submit")}>✍️ Share Your Experience</button>
          </div>
        </div>
        <img
          src="img.jpg"
          alt="Illustration"
          className="hero-img"
        />
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2>What You Can Do Here</h2>
        <div className="features">
          <div className="feature">
            <h3>📖 Read Real Stories</h3>
            <p>Discover stories from girls and women across India and how they face menstrual stigma.</p>
          </div>
          <div className="feature">
            <h3>🗣️ Share Your Journey</h3>
            <p>Your voice matters. Share your experience and help normalize conversations around periods.</p>
          </div>
          <div className="feature">
            <h3>💡 Get Educated</h3>
            <p>Understand the biology, myths, and truths about the menstrual cycle in a clear and simple way.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>Our Mission</h2>
        <p>
          Menstrual Voices is a community-driven platform that brings hidden stories to light and aims
          to break taboos around menstruation through empathy and education.
        </p>
      </section>
    </div>
  );
}
