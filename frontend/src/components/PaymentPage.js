import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

export default function PaymentPage({ total = 0, deliveryFee = 10, onClose, onOrderPlaced, cart = [] }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    upiId: ''
  });

  const grandTotal = total + deliveryFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create order object
    const orderData = {
      orderDate: new Date().toISOString(),
      orderStatus: 'Pending',
      deliveryDetails: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode
      },
      paymentDetails: {
        method: formData.paymentMethod,
        status: 'Pending',
        ...(formData.paymentMethod === 'card' && {
          cardInfo: {
            cardNumber: '**** **** **** ' + formData.cardNumber.slice(-4),
            expiryDate: formData.cardExpiry
          }
        }),
        ...(formData.paymentMethod === 'upi' && {
          upiId: formData.upiId
        })
      },
      items: cart.map(item => ({
        name: item.name,
        quantity: item.qty,
        price: item.price
      })),
      total: total,
      deliveryFee: deliveryFee,
      grandTotal: grandTotal
    };

    try {
      console.log('Sending order data:', orderData);
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Please login to place an order');
      }

      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to place order');
      }

      const savedOrder = await response.json();
      console.log('Order placed successfully:', savedOrder);
      alert('Order placed successfully!');
      onOrderPlaced && onOrderPlaced();
      onClose && onClose(); // Clear cart and close modal
      navigate('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
      alert(error.message || 'Error placing order. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || '';
    }
    // Format expiry date
    else if (name === 'cardExpiry') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .slice(0, 5);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const renderPaymentDetails = () => {
    if (formData.paymentMethod === 'card') {
      return (
        <div className="additional-payment-details">
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="4111 1111 1111 1111"
              maxLength="19"
              required={formData.paymentMethod === 'card'}
            />
            <small className="input-hint">Example: 4111 1111 1111 1111</small>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleInputChange}
                placeholder="MM/YY"
                maxLength="5"
                required={formData.paymentMethod === 'card'}
              />
              <small className="input-hint">Example: 12/25</small>
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="password"
                name="cardCvv"
                value={formData.cardCvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength="3"
                required={formData.paymentMethod === 'card'}
              />
              <small className="input-hint">Example: 123</small>
            </div>
          </div>
          <div className="card-examples">
            <p className="example-note">For testing, you can use these example cards:</p>
            <div className="example-cards">
              <div className="example-card">
                <span>Visa:</span> 4111 1111 1111 1111
              </div>
              <div className="example-card">
                <span>Mastercard:</span> 5555 5555 5555 4444
              </div>
              <div className="example-card">
                <span>Expiry:</span> Any future date (MM/YY)
              </div>
              <div className="example-card">
                <span>CVV:</span> Any 3 digits
              </div>
            </div>
          </div>
        </div>
      );
    } else if (formData.paymentMethod === 'upi') {
      return (
        <div className="additional-payment-details">
          <div className="form-group">
            <label>UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleInputChange}
              placeholder="Enter your UPI ID (e.g., name@upi)"
              required={formData.paymentMethod === 'upi'}
            />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Complete Your Order</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="payment-sections-container">
            {/* Left Section - Delivery Details */}
            <div className="payment-section">
              <h3>Delivery Details</h3>
              <div className="form-stack">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Delivery Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full address"
                    rows="3"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your city"
                    />
                  </div>

                  <div className="form-group">
                    <label>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Payment Method */}
            <div className="payment-section">
              <h3>Payment Method</h3>
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  <div className="payment-option-content">
                    <div className="payment-text">
                      <h4>Cash on Delivery</h4>
                      <p>Pay when you receive your order</p>
                    </div>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <div className="payment-option-content">
                    <div className="payment-text">
                      <h4>Credit/Debit Card</h4>
                      <p>Pay securely with your card</p>
                    </div>
                  </div>
                </label>
                {formData.paymentMethod === 'card' && renderPaymentDetails()}

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                  />
                  <div className="payment-option-content">
                    <div className="payment-text">
                      <h4>UPI</h4>
                      <p>Pay using UPI apps</p>
                    </div>
                  </div>
                </label>
                {formData.paymentMethod === 'upi' && renderPaymentDetails()}

                <div className="order-summary">
                  <div className="summary-row">
                    <span>Order Total:</span>
                    <span className="price">₹{total}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery Fee:</span>
                    <span className="price">₹{deliveryFee}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span className="price">₹{grandTotal}</span>
                  </div>
                </div>

                <button type="submit" className="place-order-btn">
                  Place Order • ₹{grandTotal}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 