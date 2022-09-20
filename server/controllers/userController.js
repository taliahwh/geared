import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import generateToken from '../utils/generateToken.js';

import User from '../models/userModel.js';
import Post from '../models/postModel.js';
import Notification from '../models/notificationModel.js';
import Review from '../models/reviewModel.js';

/**
 * @desc Authenticate user and get token
 * @route POST /user/signup
 * @access Public
 */
const signIn = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const sendUserData = (user) => {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      // notifications: user.notifications,
      // savedPosts: user.savedPosts,
      // likedPosts: user.savedPosts,
      token: generateToken(user._id),
    });
  };

  if (username) {
    const userByUsername = await User.findOne({ username });

    if (!userByUsername) {
      res.status(404);
      throw new Error('Username not found');
    }

    const correctPassword = await bcrypt.compare(
      password,
      userByUsername.password
    );

    if (!correctPassword) {
      res.status(400);
      throw new Error('Invalid password');
    }

    if (userByUsername && correctPassword) {
      sendUserData(userByUsername);
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  }
});

/**
 * @desc Create new user
 * @route POST /user/signup
 * @access Public
 */
const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, username, password, confirmPassword } =
    req.body;

  // Find user by email
  const emailExists = await User.findOne({ email });

  if (emailExists) {
    res.status(404);
    throw new Error('Email already exists');
  }

  // Find user by username
  const usernameExists = await User.findOne({ username });

  if (usernameExists) {
    res.status(404);
    throw new Error('Username already exists');
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error('Passwords do not match. Please try again.');
  }

  // Password strength requirement (uppercase, lowercase, number and special char)
  if (password.length < 8) {
    res.status(400);
    throw new Error('Password must be at least 8 characters.');
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonalphas = /\W/.test(password);
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
    res.status(400);
    throw new Error(
      'Password must be at least 8 characters, contain an upper and lowercase letter, a number, and special character.'
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    name: `${firstName} ${lastName}`,
    email,
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: `${firstName} ${lastName}`,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Something went wrong.');
  }
});

/**
 * @desc Save user's push token for push notifications
 * by receiving it from client if accepted upon prompt.
 * Push token get updated in the user model and remains
 * the same upon every sign in.
 * @route PUT /user/pushtoken
 * @access Public
 */
const savePushToken = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const { pushToken } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error('No user found with that id.');
  }

  user.pushToken = pushToken;
  await user.save();

  res.json(pushToken);
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const {
    dateOfBirth,
    newProfileImage,
    newBio,
    interest1,
    interest2,
    interest3,
    interest4,
    newFullName,
    newWebsite,
  } = req.body;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Update user's profile image, bio, name, and website if entered in form
  user.profileImage = newProfileImage || user.profileImage;
  user.bio = newBio || user.bio;
  user.name = newFullName || user.name;
  user.website = newWebsite || user.website;
  user.dateOfBirth = dateOfBirth || user.dateOfBirth;
  const updatedUser = await user.save();

  // Update user's interests
  await User.updateMany(
    { _id: userId },
    {
      $set: {
        'interests.0.name': interest1 === '' ? null : interest1,
      },
    }
  );
  await User.updateMany(
    { _id: userId },
    {
      $set: {
        'interests.1.name': interest2 === '' ? null : interest2,
      },
    }
  );
  await User.updateMany(
    { _id: userId },
    {
      $set: {
        'interests.2.name': interest3 === '' ? null : interest3,
      },
    }
  );
  await User.updateMany(
    { _id: userId },
    {
      $set: {
        'interests.3.name': interest4 === '' ? null : interest4,
      },
    }
  );

  // update profile image for any posts the user has
  await Post.updateMany(
    { 'listedBy.userId': userId },
    {
      $set: {
        'listedBy.profileImage': newProfileImage ? newProfileImage : null,
      },
    }
  );

  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    profileImage: updatedUser.profileImage,
    bio: updatedUser.bio,
    dateOfBirth: updatedUser.dateOfBirth,
    interests: updatedUser.interests,
    website: updatedUser.website,
    token: generateToken(updatedUser._id),
  });
});

// @desc Update user password
// @route PUT /api/users/password
// @access Private
const updateUserPassword = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;
  const { newPassword, confirmPassword } = req.body;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Password check
  if (newPassword && !confirmPassword) {
    res.status(401);
    throw new Error('Confirm password is required');
  }

  if (newPassword && newPassword !== confirmPassword) {
    res.status(400);
    throw new Error('Passwords do not match.');
  }

  // Password strength requirement (uppercase, lowercase, number and special char)
  if (newPassword && newPassword.length < 8) {
    res.status(400);
    throw new Error('Password must be at least 8 characters.');
  }

  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasLowerCase = /[a-z]/.test(newPassword);
  const hasNumbers = /\d/.test(newPassword);
  const hasNonalphas = /\W/.test(newPassword);
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
    res.status(400);
    throw new Error(
      'Password must be at least 8 characters, contain an upper and lowercase letter, a number, and special character.'
    );
  }

  const newHashedPassword = await bcrypt.hash(newPassword, 12);
  user.password = newHashedPassword;
  await user.save();

  res.status(200).json({ message: 'Password successfully updated' });
});

// @desc Get user details by id
// @route GET /api/users/:id
// @access Private
const getUserDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).select('-password');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(user);
});

// @desc Get auth user's details
// @route GET /api/users/auth-details
// @access Private
const getAuthUserDetails = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id).select('-password');

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(user);
});

/**
 * @desc Fetch all loggen in user's posts (collection) by their id
 * @route GET /posts/collection/:id
 * @access Public
 */
const getAuthPosts = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);

  if (!user) {
    res.status(403);
    throw new Error('Unauthorized. Must be signed in.');
  }

  // dot notation for nested documents (mongoose)
  const posts = await Post.find({
    'listedBy.userId': String(user._id),
  });

  if (!posts) {
    res.status(404);
    throw new Error('User does not have any listings.');
  }

  const userCollection = posts.reverse();
  res.status(200).json(userCollection);
});

/**
 * @desc Fetch all user's posts (collection) by their id
 * @route GET /posts/collection/:id
 * @access Public
 */
const getPostsByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(403);
    throw new Error('Unauthorized. Must be signed in.');
  }

  // dot notation for nested documents (mongoose)
  const posts = await Post.find({
    'listedBy.userId': String(user._id),
  });

  if (!posts) {
    res.status(404);
    throw new Error('User does not have any listings.');
  }

  const userCollection = posts.reverse();
  res.status(200).json(userCollection);
});

/**
 * @desc Get user notifications by user id
 * @route GET /users/notifications/:id
 * @access Public
 */
const getNotifications = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;

  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const userNotifications = user.notifications.map(mongoose.Types.ObjectId);
  const notifications = await Notification.find({
    _id: { $in: userNotifications },
  });

  res.status(200).json(notifications);
});

/**
 * @desc Mark all notifications as viewed by user id
 * @route PUT /users/notifications
 * @access Public
 */
const markNotificationsAsViewed = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;

  const user = await User.findById(userId);
  const userNotifications = user.notifications.map(mongoose.Types.ObjectId);
  await Notification.updateMany(
    {
      _id: { $in: userNotifications },
      viewed: false,
    },
    { $set: { viewed: true } }
  );

  // const notifications = user.notifications;
  res.status(200).json({ message: 'Notifications marked as viewed' });
});

/**
 * @desc Check for number of unread notifications
 * @route GET /users/unread-notifications/:id
 * @access Public
 */
const checkUnreadNotifications = asyncHandler(async (req, res) => {
  const { id: userId } = req.user;

  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const userNotifications = user.notifications.map(mongoose.Types.ObjectId);
  const unreadNotifications = await Notification.find({
    _id: { $in: userNotifications },
    viewed: false,
  });

  let numUnreadNotifications;
  if (!unreadNotifications.length) numUnreadNotifications = null;
  else numUnreadNotifications = unreadNotifications.length;

  res.status(200).json({ unreadNotifications: numUnreadNotifications });
});

/**
 * @desc Follow user by user id
 * @route PUT /users/follow/:id
 * @access Public
 */
const followUser = asyncHandler(async (req, res) => {
  const { id: authUserId } = req.user;
  const { id: userToFollowId } = req.params;

  if (String(authUserId) === String(userToFollowId)) {
    res.status(400);
    throw new Error('Cannot follow yourself.');
  }

  const userToFollow = await User.findById(userToFollowId);

  if (!userToFollow) {
    res.status(404);
    throw new Error('User not found with that id.');
  }

  /* checks the index to see if the userId already appears in the post's likes */
  const index = userToFollow.followers.findIndex(
    (id) => id === String(authUserId)
  );

  if (index === -1) {
    // follow the user
    userToFollow.followers.push(authUserId);
  } else {
    // dislike the post
    // returns an array of followers without the current user's id (removes)
    userToFollow.followers = userToFollow.followers.filter(
      (id) => id !== String(authUserId)
    );
  }

  const updatedUser = await userToFollow.save();

  const authUser = await User.findById(authUserId);
  if (!authUser) {
    res.status(404);
    throw new Error('Requesting user model not found');
  }

  // Updating following arr in Auth User document
  const idExistsInFollowingArr = authUser.following.includes(
    String(updatedUser._id)
  ); // returns Boolean

  if (!idExistsInFollowingArr) {
    authUser.following.push(updatedUser._id); // if user's if is not in arr, pushed user's id
  }
  if (idExistsInFollowingArr) {
    authUser.following = authUser.following.filter(
      (id) => id !== String(updatedUser._id)
    );
  }

  await authUser.save();

  if (index === -1 && String(authUserId) !== String(userToFollowId)) {
    const newNotification = await Notification.create({
      notificationType: 'Follow',
      notificationBody: `@${authUser.username} started following you.`,
      requestTo: String(userToFollowId),
      requestFrom: {
        id: String(authUserId),
        username: authUser.username,
        profileImage: authUser.profileImage,
      },
    });
    await newNotification.save();
    userToFollow.notifications.push(newNotification._id);
    await userToFollow.save();
  }

  res.status(200).json({ message: 'Followed user' });
});

/**
 * @desc Get user's followers by user id
 * @route GET /users/followers/:id
 * @access Public
 */
const getFollowers = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400);
    throw new Error('No user found with that id.');
  }

  const userFollowersIds = user.followers.map(mongoose.Types.ObjectId); // convert strs to objectId
  const followers = await User.find({ _id: { $in: userFollowersIds } }).select(
    'name username profileImage'
  );

  res.status(200).json(followers);
});

/**
 * @desc Get user's following by user id
 * @route GET /users/following/:id
 * @access Public
 */
const getFollowing = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400);
    throw new Error('No user found with that id.');
  }

  const userFollowingIds = user.following.map(mongoose.Types.ObjectId); // convert strs to objectId
  const following = await User.find({ _id: { $in: userFollowingIds } }).select(
    'name username profileImage'
  );

  res.status(200).json(following);
});

/**
 * @desc Leave seller a review by seller's id
 * @route POST /users/review/:id
 * @access Private
 */
const postReview = asyncHandler(async (req, res) => {
  const { id: reviewerId } = req.user;
  const { id: sellerId } = req.params;

  const { rating, review, productImage } = req.body;

  // Pull reviewer and seller's User model
  const reviewer = await User.findById(reviewerId);

  if (!reviewer) {
    res.status(400);
    throw new Error('No reviewing user found with that id.');
  }

  const seller = await User.findById(sellerId);

  if (!seller) {
    res.status(400);
    throw new Error('No seller user found with that id.');
  }

  // create new review
  const newReview = await Review.create({
    sender: {
      username: reviewer.username,
      name: reviewer.name,
      profileImage: reviewer.profileImage,
      userId: String(reviewerId),
    },
    rating,
    review,
    productImage,
  });

  const savedReview = await newReview.save();

  // updated seller's numReviews, reviewAvg, and push review's id into user's reviews arr
  seller.numReviews += 1;
  seller.totalReviewStars += rating;
  seller.reviewAvg = (seller.totalReviewStars / seller.numReviews).toFixed(1);
  seller.reviews.push(savedReview._id);

  await seller.save();

  // save new review, updated seller's User model
  res.status(201).json(savedReview);
});

/**
 * @desc Get user's reviews by user id
 * @route GET /users/reviews/:id
 * @access Private
 */
const getReviews = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error('Not authorized. Please sign in.');
  }

  const reviews = user.reviews.map(mongoose.Types.ObjectId); // convert strs to objectId
  const allReviews = await Review.find({ _id: { $in: reviews } });
  const orderedReviews = allReviews.reverse();

  res.status(200).json(orderedReviews);
});

export {
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
};
