import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

import Message from '../models/messageModel.js';

/**
 * @desc Get all messages between two users
 * @route GET /
 * @access Public
 */
const getMessages = asyncHandler(async (req, res) => {
  const { id: from } = req.user;
  const { id: to } = req.params;

  const messages = await Message.find({
    users: {
      $all: [from, to],
    },
  }).sort({ updatedAt: 1 });

  const projectedMessages = messages.map((msg) => {
    return {
      fromSelf: msg.sender.toString() === from,
      message: msg.message.text,
    };
  });
  res.json(projectedMessages);
});

/**
 * @desc Get all messages between two users
 * @route POST /send-message
 * @access Public
 */
const sendMessage = asyncHandler(async (req, res) => {
  const { from, to, message } = req.body;

  const newMessage = await Message.create({
    message: { text: message },
    users: [from, to],
    sender: from,
  });

  res.status(201).json(newMessage);
});

export { getMessages, sendMessage };
