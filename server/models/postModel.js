import mongoose from 'mongoose';

import { commentSchema } from './commentModel.js';

export const postSchema = new mongoose.Schema(
  {
    images: {
      type: [
        {
          title: {
            type: String,
            // required: true,
          },
          imgUrl: {
            type: String,
            // required: true,
          },
        },
      ],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    sport: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    showcase: {
      type: Boolean,
      required: true,
    },
    forSale: {
      type: Boolean,
      required: true,
    },
    openToOffers: {
      type: Boolean,
      required: true,
    },
    itemPrice: {
      type: Number,
      required: true,
    },
    shippingPrice: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
    },
    likes: {
      type: [String],
      default: [],
    },
    savedBy: {
      type: [String],
      default: [],
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
    listedBy: {
      username: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      profileImage: {
        type: String,
        required: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      dateJoined: {
        type: String,
      },
    },
  },

  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
