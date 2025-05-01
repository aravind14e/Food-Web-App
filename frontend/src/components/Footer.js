import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="brand">QuickBite.</h2>
          <p className="brand-description">
            Craving something tasty? We've got you covered. Order now and enjoy!
            Delivering fresh, delicious food to your doorstep. Fast, reliable, and
            convenient. Savor the flavors of your city. Order food online with QuickBite
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>COMPANY</h3>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>GET IN TOUCH</h3>
            <ul>
              <li><a href="tel:+1-219-345-6789">+1-219-345-6789</a></li>
              <li><a href="mailto:contact@quickbite.com">contact@quickbite.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © QuickBite.com - All Rights Reserved</p>
      </div>
    </footer>
  );
} 