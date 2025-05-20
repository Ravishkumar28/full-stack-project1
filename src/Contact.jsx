// src/pages/Contact.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2 className="contact-title">📬 Contact Us</h2>

        <p className="contact-info">
  <FaEnvelope className="icon" /> Email:{" "}
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tonisha@iitj.ac.in" target="_blank" rel="noopener noreferrer">
  Prof. Tonisha Guin
</a>

</p>


        <p className="contact-info">
          <FaMapMarkerAlt className="icon" /> Address: IIT JODHPUR, Rajasthan, India
        </p>

        <div className="social-links">
          <span>💬 Follow us:</span>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>📨 Send us a message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="map-container">
      <iframe
  title="IIT Jodhpur Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0050473686457!2d73.1118267!3d26.4689006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea672337b%3A0xb6c9a5a9b08db22e!2sIndian%20Institute%20of%20Technology%20(IIT)%2C%20Jodhpur!5e0!3m2!1sen!2sin!4v1686055583363!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </div>
  );
}
