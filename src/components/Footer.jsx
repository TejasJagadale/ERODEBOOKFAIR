import React from 'react';
import {
  LocationOn,
  Email,
  Phone,
  Facebook,
  Instagram,
  YouTube,
} from '@mui/icons-material';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">ஈரோடு புத்தகத் திருவிழா</h2>
          <p>2025 © அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
        </div>

        <div className="footer-section">
          <p><LocationOn className="footer-icon" /> ஈரோடு வெண்கல துறை மைதானம்</p>
          <p><Phone className="footer-icon" /> +91 98765 43210</p>
          <p><Email className="footer-icon" /> erodebookfest@gmail.com</p>
        </div>

        <div className="footer-section">
          <p>எங்களை பின்தொடரவும்:</p>
          <div className="footer-socials">
            <a href="#" className="footer-link"><Facebook /></a>
            <a href="#" className="footer-link"><Instagram /></a>
            <a href="#" className="footer-link"><YouTube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
