const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');

// Apply auth middleware to all order routes
router.use(auth);

// Create new order
router.post('/', orderController.createOrder);

// Get all orders for current user
router.get('/', orderController.getUserOrders);

// Get single order
router.get('/:id', orderController.getOrder);

// Update order status
router.patch('/:id/status', orderController.updateOrderStatus);

// Cancel order
router.post('/:id/cancel', orderController.cancelOrder);

module.exports = router; 