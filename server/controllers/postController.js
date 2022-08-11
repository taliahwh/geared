import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import moment from 'moment';

import Post from '../models/postModel.js';
import User from '../models/userModel.js';
import Comment from '../models/commentModel.js';
import Notification from '../models/notificationModel.js';

import sendPushNotification from '../utils/sendPushNotification.js';

/**
 * @desc Fetch all posts to display in Explore tab
 * @route GET /posts/explore
 * @access Public
 */
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  const explorePosts = posts.reverse();
  res.status(200).json(explorePosts);
});

/**
 * @desc Fetch all following users' posts
 * @route GET /posts/explore
 * @access Public
 */
const getFollowingUsersPosts = asyncHandler(async (req, res) => {
  const { id: authUserId } = req.user;

  const authUser = await User.findById(authUserId);

  const usersFollowingIds = authUser.following.map(mongoose.Types.ObjectId); // convert strs to objectId
  const usersFollowingPosts = await Post.find({
    'listedBy.userId': { $in: usersFollowingIds },
  });
  const orderedPosts = usersFollowingPosts.reverse();

  res.status(200).json(orderedPosts);
});

/**
 * @desc Create new post
 * @route POST /posts/
 * @access Public
 */
const createNewPost = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const {
    images,
    description,
    tags,
    sportValue,
    conditionValue,
    showcase,
    forSale,
    openToOffers,
    itemPrice,
    shippingPrice,
    locationValue,
  } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const userJoinedDate = moment(user.createdAt).format('MMMM YYYY');

  const newPost = await Post.create({
    images,
    description,
    tags,
    sport: sportValue,
    condition: conditionValue,
    showcase,
    forSale,
    openToOffers,
    itemPrice: itemPrice,
    shippingPrice: shippingPrice,
    location: locationValue,
    listedBy: {
      userId,
      username: user.username,
      profileImage: user.profileImage,
      name: user.name,
      dateJoined: userJoinedDate,
    },
  });

  const createdPost = await newPost.save();
  res.status(201).json(createdPost);
});

/**
 * @desc Fetch post details by post id
 * @route GET /posts/:id
 * @access Public
 */
const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }
  res.status(200).json(post);
});

/**
 * @desc Like post by post id
 * @route PUT /posts/:id/likepost
 * @access Public
 */
const likePost = asyncHandler(async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('Nost authorized. Must be logged in to like post.');
  }

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(404);
    throw new Error('No post with that id');
  }

  const post = await Post.findById(postId);
  const userOfPostId = post.listedBy.userId;
  const userOfPost = await User.findById(userOfPostId);
  if (!userOfPost) {
    res.status(404);
    throw new Error('User of post not found');
  }

  /* checks the index to see if the userId already appears in the post's likes */
  const index = post.likes.findIndex((id) => id === String(userId));

  if (index === -1) {
    // like the post
    post.likes.push(userId);
  } else {
    // dislike the post
    // returns an array of likes without the current user's like (removes)
    post.likes = post.likes.filter((id) => id !== String(userId));
  }

  const updatedPost = await post.save();

  // Updating liked posts arr in User model
  const postExistsInLikedPosts = user.likedPosts.includes(
    String(updatedPost._id)
  ); // returns Boolean

  if (!postExistsInLikedPosts) {
    user.likedPosts.push(updatedPost._id); // if post is not in arr, pushed post's id
  }
  if (postExistsInLikedPosts) {
    user.likedPosts = user.likedPosts.filter(
      (id) => id !== String(updatedPost._id)
    );
  }

  await user.save();

  // If liking the post:
  if (index === -1 && String(userId) !== String(userOfPostId)) {
    // Send a notification through app
    const newNotification = await Notification.create({
      notificationType: 'Like Post',
      notificationBody: `@${user.username} liked your post`,
      postId: String(postId),
      postImage: post.images[0].imgUrl,
      requestTo: String(userOfPostId),
      requestFrom: {
        id: String(user._id),
        username: user.username,
        profileImage: user.profileImage,
      },
    });

    // Send Push Notification
    const pushToken = userOfPost.pushToken;
    sendPushNotification(pushToken, `@${user.username} liked your post`);

    await newNotification.save();
    userOfPost.notifications.push(newNotification);
    await userOfPost.save();
  }

  res.status(200).json({ message: 'Liked post' });
});

/**
 * @desc Fetch all user's liked posts
 * @route GET /posts/likedposts
 * @access Public
 */
const getLikedPosts = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('Not authorized. Please sign in.');
  }

  const userLikes = user.likedPosts.map(mongoose.Types.ObjectId); // convert strs to objectId
  const likedPosts = await Post.find({ _id: { $in: userLikes } });
  const likedPostsInOrder = likedPosts.reverse();

  res.status(200).json(likedPosts);
});

/**
 * @desc Save post by post id
 * @route PUT /posts/:id/savepost
 * @access Public
 */
const savePost = asyncHandler(async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('Nost authorized. Must be logged in to save post.');
  }

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    res.status(404);
    throw new Error('No post with that id');
  }

  const postToSave = await Post.findById(postId);

  // Updating saved posts arr in User model
  const postExistsInSavedPosts = user.savedPosts.includes(
    String(postToSave._id)
  ); // returns Boolean

  if (!postExistsInSavedPosts) {
    user.savedPosts.push(postToSave._id); // if post is not in arr, pushed post's id
    postToSave.savedBy.push(String(userId));
  }
  if (postExistsInSavedPosts) {
    user.savedPosts = user.savedPosts.filter(
      (id) => id !== String(postToSave._id)
    );
    postToSave.savedBy = postToSave.savedBy.filter(
      (id) => id !== String(userId)
    );
  }

  await user.save();
  await postToSave.save();
  // const updatedSavedPosts = user.savedPosts;
  res.status(200).json(user);
});

/**
 * @desc Fetch all user's saved posts
 * @route GET /posts/savedposts
 * @access Public
 */
const getSavedPosts = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('Not authorized. Please sign in.');
  }

  const userSavedPosts = user.savedPosts.map(mongoose.Types.ObjectId); // convert strs to objectId
  const savedPosts = await Post.find({ _id: { $in: userSavedPosts } });
  const savedPostsInOrder = savedPosts.reverse();

  res.status(200).json(savedPostsInOrder);
});

/**
 * @desc Create a new comment by post id
 * @route POST /posts/comment/:id
 * @access Public
 */
const createNewComment = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const { id: postId } = req.params;
  const { commentBody } = req.body;

  const commentingUser = await User.findById(userId);
  if (!commentingUser) {
    res.status(404);
    throw new Error('User not found');
  }

  const post = await Post.findById(postId);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }
  const userOfPostId = post.listedBy.userId;
  const userOfPost = await User.findById(userOfPostId);
  if (!userOfPost) {
    res.status(404);
    throw new Error('User of post not found');
  }

  const newComment = await Comment.create({
    sender: {
      username: commentingUser.username,
      name: commentingUser.name,
      profileImage: commentingUser.profileImage,
      userId: commentingUser._id,
    },
    post: String(postId),
    content: commentBody,
  });
  await newComment.save();
  post.comments.push(newComment);
  await post.save();

  // Don't send notification if user is commenting on their own post
  if (String(userId) !== String(userOfPostId)) {
    const newNotification = await Notification.create({
      notificationType: 'Comment',
      notificationBody: `@${commentingUser.username} commented on your post`,
      postId: String(postId),
      postImage: post.images[0].imgUrl,
      commentBody,
      requestTo: String(userOfPostId),
      requestFrom: {
        id: String(commentingUser._id),
        username: commentingUser.username,
        profileImage: commentingUser.profileImage,
      },
    });

    // Send Push Notification
    const pushToken = userOfPost.pushToken;
    sendPushNotification(
      pushToken,
      `@${commentingUser.username} commented on your post: ${commentBody}`
    );

    await newNotification.save();
    userOfPost.notifications.push(newNotification);
    await userOfPost.save();
  }

  res.status(200).json(newComment);
});

/**
 * @desc Delete comment from post by comment id
 * @route PUT /posts/deletecomment/:id
 * @access Public
 */
const deleteComment = asyncHandler(async (req, res) => {
  const { id: commentId } = req.params;
  const { id: userId } = req.user;

  const commentExists = await Comment.findById(commentId);
  if (!commentExists) {
    res.json(404);
    throw new Error('No comment found with that id.');
  }
  const postId = commentExists.post;
  const post = await Post.findById(postId);

  //  Check if User is authorized to delete comment:
  // -- If their id is the same as the comment sender's id
  // -- OR if their id is the same as the post's listedBy userId
  // -- Meaning they can only delete their comment or comment's under their posts
  if (
    String(userId) !== String(post.listedBy.userId) &&
    String(userId) !== String(commentExists.sender.userId)
  ) {
    res.status(400);
    throw new Error('Not authorized to delete this comment');
  }

  // Delete comment from post's comments array
  const updatedPost = await Post.updateOne(
    { _id: postId },
    {
      $pull: {
        comments: {
          _id: commentId,
        },
      },
    }
  );

  // Delete comment document
  await Comment.findByIdAndDelete(commentId);

  res.status(200).json({ message: 'Comment deleted' });

  res.json(updatedPost);
});

export {
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
};
