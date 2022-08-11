import mongoose from 'mongoose';
import { postSchema } from './postModel.js';
import { notificationSchema } from './notificationModel.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default:
        'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
    },
    dateOfBirth: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    website: {
      type: String,
    },
    interests: {
      type: [Object],
      default: [
        {
          id: 1,
          name: null,
        },
        {
          id: 2,
          name: null,
        },
        {
          id: 3,
          name: null,
        },
        {
          id: 4,
          name: null,
        },
      ],
    },
    savedPosts: {
      type: [String],
      default: [],
    },
    likedPosts: {
      type: [String],
      default: [],
    },
    notifications: {
      type: [notificationSchema],
      default: [],
    },
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
    pushToken: {
      type: String,
      default: '',
    },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
