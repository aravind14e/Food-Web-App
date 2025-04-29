import React from 'react';

export default function AppDetails() {
  return (
    <div className="app-details" style={{
      margin: '3rem 2rem',
      padding: '2rem',
      background: '#fff',
      borderRadius: '18px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Get the QuickBite App</h2>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
        Order food on the go, track your orders, and enjoy exclusive app-only offers!<br />
        Download the QuickBite app for Android and iOS.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="#" style={{ display: 'inline-block' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            style={{ height: 60 }}
          />
        </a>
        <a href="#" style={{ display: 'inline-block' }}>
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            style={{ height: 60 }}
          />
        </a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        alt="Mobile app preview"
        style={{ marginTop: '2rem', borderRadius: '12px', maxWidth: '300px', width: '100%', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
      />
    </div>
  );
}
