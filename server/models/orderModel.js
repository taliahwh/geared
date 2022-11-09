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
    sellerInfo: {
      sellerId: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    transaction: {
      item: {
        productId: {
          type: String,
          required: true,
        },
        productName: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        productImage: {
          type: String,
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
        price: {
          type: Number,
          required: true,
        },
      },
      subtotal: {
        type: Number,
        required: true,
      },
      shipping_fee: {
        type: Number,
        required: true,
      },
      state_sales_tax: {
        type: Number,
        required: true,
      },
      geared_hosting_fee: {
        type: Number,
        required: true,
      },
    },
  },
  {
    // Automatically generates createdAt and updatedAt fields
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
