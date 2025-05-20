// src/pages/SubmitStory.jsx
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./SubmitStory.css";

export default function SubmitStory() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    state: "",
    language: "",
    content: ""
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first.");
      return;
    }

    const { name, age, state, language, content } = formData;
    if (!name || !age || !state || !language || !content) {
      return alert("Please fill in all fields.");
    }

    try {
      await addDoc(collection(db, "stories"), {
        ...formData,
        email: user.email,
        createdAt: Timestamp.now()
      });

      alert("✅ Story submitted successfully!");
      setFormData({
        name: "",
        age: "",
        state: "",
        language: "",
        content: ""
      });
    } catch (error) {
      alert("❌ Failed to submit story.");
      console.error("Firestore Error:", error);
    }
  };

  return (
    <div className="submit-container">
      <div className="submit-card">
        <h2>📝 Share Your Story</h2>
        <p>Your voice can inspire and empower others. Tell us your journey.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Your Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="Your State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={formData.language}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Write your story here..."
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">📤 Submit Story</button>
        </form>
      </div>
    </div>
  );
}
