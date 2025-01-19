import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We connect pet lovers with adoptable pets and provide resources for veterinary care. Our mission is to ensure every pet finds a loving home.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: support@petadoption.com</p>
          <p>Phone: 0715463215</p>
          <p>Address: 123 Pet Street, colombo</p>
        </div>
        <div className="footer-column">
          <h3>Our Services</h3>
          <p>Adoption Assistance</p>
          <p>Veterinary Care</p>
          <p>Pet Resources</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Pet Adoption and Veterinary Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
