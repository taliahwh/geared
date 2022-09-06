import mongoose from 'mongoose';

export const reviewSchema = new mongoose.Schema(
  {
    sender: {
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
        type: String,
        required: true,
      },
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
