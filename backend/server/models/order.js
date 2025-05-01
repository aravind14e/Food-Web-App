const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  orderStatus: {
    type: String,
    enum: ['Pending', 'Processing', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  deliveryDetails: {
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    pincode: String
  },
  paymentDetails: {
    method: {
      type: String,
      enum: ['cod', 'card', 'upi'],
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending'
    },
    cardInfo: {
      cardNumber: String,
      expiryDate: String
    },
    upiId: String
  },
  items: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  total: Number,
  deliveryFee: Number,
  grandTotal: Number
});

module.exports = mongoose.model('Order', orderSchema); 