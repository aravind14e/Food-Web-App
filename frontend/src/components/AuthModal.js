import React, { useState } from 'react';
import './SignInModal.css';

export default function AuthModal({ open, onClose, onSignup, onLogin }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        // After successful signup, automatically log in
        const loginRes = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(form)
        });
        
        const loginData = await loginRes.json();
        
        if (loginRes.ok) {
          localStorage.setItem('token', loginData.token);
          onSignup && onSignup(loginData.user);
          onClose();
        } else {
          throw new Error(loginData.msg || 'Login after signup failed');
        }
      } else {
        throw new Error(data.msg || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('token', data.token);
        onLogin && onLogin(data.user);
        onClose();
      } else {
        throw new Error(data.msg || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{isSignIn ? 'Login' : 'Sign Up'}</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={isSignIn ? handleLoginSubmit : handleSignupSubmit}>
          {!isSignIn && (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              disabled={loading}
            />
          )}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            disabled={loading}
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            disabled={loading}
          />
          <button 
            type="submit" 
            className="modal-login-btn"
            disabled={loading}
          >
            {loading ? 'Please wait...' : (isSignIn ? 'Login' : 'Sign Up')}
          </button>
          <div className="modal-checkbox">
            <input type="checkbox" id="terms" required disabled={loading} />
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
