import express from 'express';

import {
  createOrder,
  confirmOrder,
  cancelOrder,
} from '../controllers/paypalController.js';

// Middleware

//todo
// import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// // Render index.ejs file
// router.get('/', (req, res) => {
//   res.render('index');
// });
router.get('/createorder', createOrder);

router.get('/cancel', cancelOrder);

router.get('/success', confirmOrder);

export default router;
