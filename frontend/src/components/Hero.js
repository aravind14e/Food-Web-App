import React from 'react';
import './Hero.css'; // or your main CSS file

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
        alt="Delicious food"
        className="hero-img"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Order your<br />favourite food here</h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button
          className="view-menu-btn"
          onClick={() => {
            const menu = document.getElementById('menu-section');
            if (menu) {
              menu.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          View Menu
        </button>
      </div>
    </section>
  );
}
