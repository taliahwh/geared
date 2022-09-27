import express from 'express';

import {
  getMessages,
  sendMessage,
  getConversations,
} from '../controllers/messageController.js';

// Middleware
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/conversations', authMiddleware, getConversations);

router.get('/:id', authMiddleware, getMessages);

router.post('/send-message', authMiddleware, sendMessage);

export default router;
