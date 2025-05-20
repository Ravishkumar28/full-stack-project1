// src/pages/ReadStories.jsx
import React, { useState } from "react";
import { realStories } from "../realStories";
import "./ReadStories.css";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "te", name: "Telugu" },
  { code: "mr", name: "Marathi" },
  { code: "ha", name: "Haryanvi" }
];

export default function ReadStories() {
  const [activeLang, setActiveLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [likes, setLikes] = useState({});
  const [page, setPage] = useState(1);
  const [activeState, setActiveState] = useState("");
  console.log("Active Lang:", activeLang);
  console.log("Available States:", Object.keys(realStories[activeLang] || {}));
  console.log("realStories['ha']", realStories["ha"]);
  console.log("realStories['te']", realStories["te"]);
  const stories = realStories[activeLang]?.[activeState] || [];
  const states = Object.keys(realStories[activeLang] || {});
  const storiesPerPage = 5;
  const totalPages = Math.ceil(stories.length / storiesPerPage);
  const paginatedStories = stories.slice((page - 1) * storiesPerPage, page * storiesPerPage);
  

  const handleReaction = (index, type) => {
    setLikes((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [type]: (prev[index]?.[type] || 0) + 1
      }
    }));
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Page link copied!");
  };

  const printPage = () => {
    window.print();
  };

  return (
    <div className={`read-page ${theme}`}>
      <div className="read-header">
        <h2>📚 Read Real Stories</h2>
        <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙 Dark" : "🌞 Light"}
        </button>
      </div>

      <div className="language-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={activeLang === lang.code ? "active" : ""}
            onClick={() => {
              setActiveLang(lang.code);
              setActiveState("");
              setPage(1);
            }}
          >
            {lang.name}
          </button>
        ))}
      </div>

      <div className="state-select">
        <label>Select State:</label>
        <select value={activeState} onChange={(e) => { setActiveState(e.target.value); setPage(1); }}>
          <option value="">-- Choose --</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {paginatedStories.map((story, idx) => (
        <div className="story-card" key={idx}>
          <div className="story-header">
            <div className="avatar">{story.name[0]}</div>
            <div>
              <h3>{story.name}, {story.age}</h3>
              <p className="lang-state">{activeLang.toUpperCase()} • {activeState}</p>
            </div>
          </div>
          <p className="story-text">{story.content}</p>
          <div className="story-actions">
            <button onClick={() => handleReaction(idx, "like")}>❤️ {likes[idx]?.like || 0}</button>
            <button onClick={() => handleReaction(idx, "love")}>💖 {likes[idx]?.love || 0}</button>
            <button onClick={() => handleReaction(idx, "support")}>🤝 {likes[idx]?.support || 0}</button>
            <button onClick={copyLink}>📎 Copy Link</button>
            <button onClick={printPage}>🖨️ Print</button>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))}>◀ Prev</button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>Next ▶</button>
        </div>
      )}
    </div>
  );
}
