import mongoose from 'mongoose';

export const commentSchema = new mongoose.Schema(
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
    post: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
