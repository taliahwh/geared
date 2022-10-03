import mongoose from 'mongoose';

export const orderSchema = new mongoose.Schema(
  {
    paypalOrderId: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    payerInfo: {
      email: {
        type: String,
        required: true,
      },
      shippingAddress: {
        recipient_name: {
          type: String,
          required: true,
        },
        addressLine1: {
          type: String,
          required: true,
        },
        addressLine2: {
          type: String,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        postal_code: {
          type: String,
          required: true,
        },
        country_code: {
          type: String,
          required: true,
        },
      },
    },
    transaction: {
      item: {
        productName: {
          type: String,
          required: true,
        },
      },
    },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Review;
