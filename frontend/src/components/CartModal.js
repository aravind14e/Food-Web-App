import React, { useState } from 'react';
import './CartModal.css';
import { useNavigate } from 'react-router-dom';

export default function CartModal({ open, cart, onClose, removeFromCart, changeQty }) {
  if (!open) return null;
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = 10; // Add fixed delivery fee

  return (
    <div className="modal-backdrop">
      <div className="modal-content" style={{ minWidth: 350 }}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>Cart is empty.</div>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map(item => (
                <li key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                  <img src={item.img} alt={item.name} style={{ width: 48, height: 36, borderRadius: 8, marginRight: 10 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ color: '#ff5630', fontWeight: 500 }}>₹{item.price}</div>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={e => changeQty(item, Number(e.target.value))}
                    style={{ width: 40, marginRight: 8, borderRadius: 4, border: '1px solid #eee', textAlign: 'center' }}
                  />
                  <button onClick={() => removeFromCart(item)} style={{ background: 'none', border: 'none', color: '#ff5630', fontSize: 20, cursor: 'pointer' }}>×</button>
                </li>
              ))}
            </ul>
            <CartTotal
              subtotal={total}
              deliveryFee={deliveryFee}
              onClose={onClose}
            />
          </>
        )}
      </div>
    </div>
  );
}

export function CartTotal({ subtotal = 0, deliveryFee = 0, onClose }) {
  const [promo, setPromo] = useState('');
  const navigate = useNavigate();

  const total = subtotal + deliveryFee;

  const handleProceedToPayment = () => {
    onClose();
    navigate('/payment');
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {/* Cart Total Section */}
      <div style={{ minWidth: 320, flex: 1 }}>
        <h2 style={{ fontWeight: 700, marginBottom: 16 }}>Cart Total</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, margin: '16px 0' }}>
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button
          style={{
            width: '100%',
            background: '#ff6a42',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '0.9rem 0',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: 1,
            marginTop: 10,
            cursor: 'pointer'
          }}
          onClick={handleProceedToPayment}
        >
          PROCEED TO PAYMENT
        </button>
      </div>
      {/* Promo Code Section */}
      <div style={{ minWidth: 320, flex: 1 }}>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>
          If you have promo code, enter here
        </div>
        <form
          style={{ display: 'flex', gap: 0 }}
          onSubmit={e => {
            e.preventDefault();
            alert('Promo code applied: ' + promo);
          }}
        >
          <input
            type="text"
            placeholder="Promocode"
            value={promo}
            onChange={e => setPromo(e.target.value)}
            style={{
              flex: 1,
              padding: '0.9rem',
              border: 'none',
              background: '#ececec',
              borderRadius: '6px 0 0 6px',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: '0 6px 6px 0',
              padding: '0 2rem',
              fontWeight: 500,
              fontSize: '1.05rem',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
