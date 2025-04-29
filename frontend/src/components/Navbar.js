import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import './Navbar.css'; // or your main CSS file

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ user, onLogout, cartCount, onCartClick, onAuthClick }) {
  const [showAuth, setShowAuth] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">QuickBite<span className="dot">.</span></div>
        <ul className="nav-links">
          <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('home-section')}>Home</li>
          <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('menu-section')}>Menu</li>
          <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('app-section')}>App</li>
          <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('contact-section')}>Contact us</li>
        </ul>
        <div className="nav-icons">
          {/* Search Icon */}
          <span className="icon">
            <svg width="24" height="24" fill="none" stroke="url(#searchGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="searchGradient" x1="0" y1="0" x2="24" y2="24">
                  <stop offset="0%" stopColor="#4f8cff" />
                  <stop offset="100%" stopColor="#00c6fb" />
                </linearGradient>
              </defs>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          {/* Cart Icon */}
          <span className="icon" style={{ position: 'relative', cursor: 'pointer' }} onClick={onCartClick}>
            <svg width="28" height="28" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#ff5630',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '0.8rem',
                padding: '2px 6px',
                fontWeight: 700
              }}>{cartCount}</span>
            )}
          </span>
          {/* Login and Signup Buttons */}
          {user ? (
            <div className="account-menu-wrapper" style={{ position: 'relative' }}>
              <span
                style={{ color: '#ff5630', fontWeight: 600, cursor: 'pointer' }}
                onClick={() => setShowMenu((v) => !v)}
              >
                {user.name || 'My Account'}
              </span>
              {showMenu && (
                <div className="account-dropdown" style={{
                  position: 'absolute',
                  right: 0,
                  top: '2.2rem',
                  background: '#fff',
                  border: '1px solid #eee',
                  borderRadius: 8,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  minWidth: 160,
                  zIndex: 100
                }}>
                  <div style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
                    <strong>{user.name}</strong><br />
                    <span style={{ fontSize: '0.95rem', color: '#888' }}>{user.email}</span>
                  </div>
                  <div
                    style={{ padding: '0.8rem 1rem', cursor: 'pointer' }}
                    onClick={() => { setShowMenu(false); /* show orders modal/section here */ }}
                  >
                    My Orders
                  </div>
                  <div
                    style={{ padding: '0.8rem 1rem', cursor: 'pointer', color: '#ff5630', fontWeight: 600 }}
                    onClick={() => { setShowMenu(false); onLogout(); }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button className="nav-btn signin-btn" onClick={onAuthClick}>
              Login / Signup
            </button>
          )}
        </div>
      </nav>
      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}
