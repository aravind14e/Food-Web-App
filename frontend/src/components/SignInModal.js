import React from 'react';
import './SignInModal.css';

export default function SignInModal({ open, onClose, onSwitchToSignup }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="modal-login-btn">Login</button>
          <div className="modal-checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By continuing, I agree to the terms of use &amp; privacy policy.
            </label>
          </div>
        </form>
        <div className="modal-footer">
          Create a new account?{' '}
          <span className="modal-link" onClick={onSwitchToSignup}>Click here</span>
        </div>
      </div>
    </div>
  );
}
