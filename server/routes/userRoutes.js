import express from 'express';

import {
  signIn,
  signUp,
  savePushToken,
  getAuthUserDetails,
  getUserDetails,
  getAuthPosts,
  getPostsByUserId,
  updateUserProfile,
  updateUserPassword,
  markNotificationAsViewed,
  getNotifications,
  followUser,
  getFollowers,
  getFollowing,
} from '../controllers/userController.js';

import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signin', signIn);

router.post('/signup', signUp);

router.put('/follow/:id', authMiddleware, followUser);

router.put('/notifications/:id', authMiddleware, markNotificationAsViewed);

router.put('/password', authMiddleware, updateUserPassword);

router.put('/profile', authMiddleware, updateUserProfile);

router.put('/pushtoken', authMiddleware, savePushToken);

router.get('/auth-collection', authMiddleware, getAuthPosts);

router.get('/auth-details', authMiddleware, getAuthUserDetails);

router.get('/followers/:id', authMiddleware, getFollowers);

router.get('/following/:id', authMiddleware, getFollowing);

router.get('/notifications/:id', authMiddleware, getNotifications);

router.get('/:id', authMiddleware, getUserDetails);

router.get('/collection/:id', authMiddleware, getPostsByUserId);

export default router;
