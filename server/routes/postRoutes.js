import express from 'express';

import {
  getAllPosts,
  getFollowingUsersPosts,
  createNewPost,
  getPostById,
  likePost,
  getLikedPosts,
  savePost,
  getSavedPosts,
  createNewComment,
  deleteComment,
  searchPostsWithFilters,
  deletePost,
} from '../controllers/postController.js';

// Middleware
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createNewPost);

router.post('/comment/:id', authMiddleware, createNewComment);

router.post('/search/:query', authMiddleware, searchPostsWithFilters);

router.get('/explore', authMiddleware, getAllPosts);

router.get('/following', authMiddleware, getFollowingUsersPosts);

router.get('/likedposts', authMiddleware, getLikedPosts);

router.get('/savedposts', authMiddleware, getSavedPosts);

router.get('/:id', authMiddleware, getPostById);

router.put('/deletecomment/:id', authMiddleware, deleteComment);

router.put('/:id/deletepost', authMiddleware, deletePost);

router.put('/:id/likepost', authMiddleware, likePost);

router.put('/:id/savepost', authMiddleware, savePost);

export default router;
