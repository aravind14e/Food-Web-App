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
import PaymentPage from './components/PaymentPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
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

  const clearCart = () => {
    setCart([]);
    setCartOpen(false);
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
    localStorage.removeItem('token');
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
      <Routes>
        <Route path="/" element={
          <>
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
          </>
        } />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/payment" element={
          <PaymentPage 
            total={cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
            deliveryFee={10}
            cart={cart}
            onClose={clearCart}
            onOrderPlaced={clearCart}
          />
        } />
      </Routes>
      <CartModal
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        removeFromCart={removeFromCart}
        changeQty={changeQty}
      />
      <AuthModal
        open={showAuth}
        isSignIn={isSignIn}
        onClose={() => setShowAuth(false)}
        onSwitch={setIsSignIn}
        onSignup={handleSignup}
        onLogin={handleLogin}
      />
    </BrowserRouter>
  );
}

export default App;
