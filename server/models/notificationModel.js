import mongoose from 'mongoose';

export const notificationSchema = new mongoose.Schema(
  {
    viewed: {
      type: Boolean,
      default: false,
    },
    notificationType: {
      type: String,
      required: true,
    },
    notificationBody: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
    },
    postImage: {
      type: String,
    },
    commentBody: {
      type: String,
    },
    requestTo: {
      type: String,
      required: true,
    },
    requestFrom: {
      profileImage: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
  },

  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
