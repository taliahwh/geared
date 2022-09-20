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
  markNotificationsAsViewed,
  getNotifications,
  checkUnreadNotifications,
  followUser,
  getFollowers,
  getFollowing,
  postReview,
  getReviews,
} from '../controllers/userController.js';

import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signin', signIn);

router.post('/signup', signUp);

router.post('/reviews/:id', authMiddleware, postReview);

router.put('/follow/:id', authMiddleware, followUser);

router.put('/view-notifications', authMiddleware, markNotificationsAsViewed);

router.put('/password', authMiddleware, updateUserPassword);

router.put('/profile', authMiddleware, updateUserProfile);

router.put('/pushtoken', authMiddleware, savePushToken);

router.get('/auth-collection', authMiddleware, getAuthPosts);

router.get('/auth-details', authMiddleware, getAuthUserDetails);

router.get('/followers/:id', authMiddleware, getFollowers);

router.get('/following/:id', authMiddleware, getFollowing);

router.get('/notifications', authMiddleware, getNotifications);

router.get('/reviews/:id', authMiddleware, getReviews);

router.get('/unread-notifications', authMiddleware, checkUnreadNotifications);

router.get('/:id', authMiddleware, getUserDetails);

router.get('/collection/:id', authMiddleware, getPostsByUserId);

export default router;
