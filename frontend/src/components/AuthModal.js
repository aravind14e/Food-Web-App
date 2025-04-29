import React, { useState } from 'react';
import './SignInModal.css';

export default function AuthModal({ open, onClose, onSignup, onLogin }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  if (!open) return null;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Signup successful!');
        onSignup && onSignup(data.user || form);
        onClose();
      } else {
        alert(data.msg || 'Signup failed');
      }
    } catch (err) {
      alert('Failed to fetch');
    }
  };
  

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Login successful!');
        onLogin && onLogin(data.user || form);
        onClose();
      } else {
        alert(data.msg || 'Login failed');
      }
    } catch (err) {
      alert('Failed to fetch');
    }
  };
  

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{isSignIn ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={isSignIn ? handleLoginSubmit : handleSignupSubmit}>
          {!isSignIn && (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit" className="modal-login-btn">
            {isSignIn ? 'Login' : 'Sign Up'}
          </button>
          <div className="modal-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              By continuing, I agree to the terms of use &amp; privacy policy.
            </label>
          </div>
        </form>
        <div className="modal-footer">
          {isSignIn ? (
            <>
              Create a new account?{' '}
              <span className="modal-link" onClick={() => setIsSignIn(false)}>
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className="modal-link" onClick={() => setIsSignIn(true)}>
                Sign in
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
