import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AppDetails from './components/AppDetails';
import ContactUs from './components/ContactUs';
import CartModal from './components/CartModal';
import AuthModal from './components/AuthModal';
import MyOrders from './components/MyOrders';
import './App.css';



function App() {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // true = Login, false = Signup
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const addToCart = (item) => {
    setCart(prev => {
      const found = prev.find(i => i.name === item.name);
      if (found) {
        return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCart(prev => prev.filter(i => i.name !== item.name));
  };

  const changeQty = (item, qty) => {
    setCart(prev => prev.map(i => i.name === item.name ? { ...i, qty } : i));
  };

  const handleSignup = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    handleSignup(formData);
  };

  return (
      <BrowserRouter>
        <Navbar
          user={user}
          onLogout={handleLogout}
          cartCount={cart.reduce((a, b) => a + b.qty, 0)}
          onCartClick={() => setCartOpen(true)}
          onAuthClick={() => setShowAuth(true)}
        />
        <section id="home-section">
          <Hero />
        </section>
        <section id="menu-section">
          <MenuSection addToCart={addToCart} />
        </section>
        <section id="app-section">
          <AppDetails />
        </section>
        <section id="contact-section">
          <ContactUs />
        </section>
        <CartModal
          open={cartOpen}
          cart={cart}
          onClose={() => setCartOpen(false)}
          removeFromCart={removeFromCart}
          changeQty={changeQty}
        >
          <button
            className="modal-login-btn"
            style={{ width: '100%', marginTop: '1rem' }}
            onClick={() => {
              alert('Payment successful! (Demo)');
              onClose();
              // Optionally clear cart here
            }}
          >
            Pay
          </button>
        </CartModal>
        <AuthModal
          open={showAuth}
          isSignIn={isSignIn}
          onClose={() => setShowAuth(false)}
          onSwitch={setIsSignIn}
          onSignup={handleSignup}
          onLogin={handleLogin}
        />
        <Routes>
          <Route path="/orders" element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
