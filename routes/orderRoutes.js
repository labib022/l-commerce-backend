const express = require('express');
const {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  updatePaymentStatus
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createOrder)
  .get(getMyOrders);

router.route('/my').get(getMyOrders);

router.route('/:id')
  .get(getOrderById);

router.route('/:id/status').put(admin, updateOrderStatus);
router.route('/:id/pay').put(protect, updatePaymentStatus);

router.route('/admin/all').get(admin, getAllOrders);

module.exports = router;