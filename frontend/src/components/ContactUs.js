import React from 'react';

export default function ContactUs() {
  return (
    <div
      id="contact-section"
      style={{
        margin: '3rem 2rem',
        padding: '2rem',
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Contact Us</h2>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
        Have questions, feedback, or need help? Reach out to us!
      </p>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}
        onSubmit={e => {
          e.preventDefault();
          alert('Thank you for contacting us!');
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #eee',
            fontSize: '1rem'
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #eee',
            fontSize: '1rem'
          }}
        />
        <textarea
          placeholder="Your Message"
          required
          rows={4}
          style={{
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid #eee',
            fontSize: '1rem',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            background: '#ff5630',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.8rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
