import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

import Message from '../models/messageModel.js';
import User from '../models/userModel.js';

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
  const { id: authUserId } = req.user;

  if (String(authUserId) !== String(from)) {
    res.status(401).json({ message: 'Not authorized' });
  }

  const newMessage = await Message.create({
    message: { text: message },
    users: [from, to],
    sender: from,
  });

  // Add receiving user to active conversations arr if it does not already exist
  const authUser = await User.findById(authUserId);
  if (!authUser.activeConversations.includes(to)) {
    authUser.activeConversations.push(to);
  }
  await authUser.save();

  res.status(201).json(newMessage);
});

/**
 * @desc Get all active coversations between auth user and other users
 * @route GET /conversations
 * @access Public
 */
const getConversations = asyncHandler(async (req, res) => {
  const { id: authUserId } = req.user;
  console.log(authUserId);

  const authUser = await User.findById(authUserId);
  const activeConversationsIds = authUser.activeConversations.map(
    mongoose.Types.ObjectId
  );
});

export { getMessages, sendMessage, getConversations };
