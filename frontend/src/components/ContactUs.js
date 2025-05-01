import React from 'react';
import Footer from './Footer';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-form-section">
          <h1>Contact Us</h1>
          <p className="contact-description">
            Have questions, feedback, or need help? We're here to assist you!
          </p>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
          }}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Your Message"
                required
                rows={6}
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

