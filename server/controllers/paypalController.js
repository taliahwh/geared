import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import paypal from 'paypal-rest-sdk';

import Message from '../models/messageModel.js';
import User from '../models/userModel.js';
// todo - Build Order Model

/**
 * @desc Create order
 * @route POST /createorder
 * @access Public
 */
const createOrder = asyncHandler(async (req, res) => {
  // const { id: authId } = req.user;
  console.log('CREATE ORDER');

  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://localhost:5000/api/paypal/success',
      cancel_url: 'http://localhost:5000/api/paypal/cancel',
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: 'item',
              sku: 'item',
              price: '1.00',
              currency: 'USD',
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: 'USD',
          total: '1.00',
        },
        description: 'This is the payment description.',
      },
    ],
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      throw error;
    } else {
      console.log('Create Payment Response');
      console.log(payment);
      res.redirect(payment.links[1].href);
    }
  });
});

/**
 * @desc Confirm order
 * @route GET /createorder
 * @access Public
 */
const confirmOrder = asyncHandler(async (req, res) => {
  console.log('CONFIRM ORDER');

  const PayerID = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    payer_id: PayerID,
    transactions: [
      {
        amount: {
          currency: 'USD',
          total: '1.00',
        },
      },
    ],
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log('Get Payment Response');
      console.log(JSON.stringify(payment));
      res.render('success');
    }
  });
});

/**
 * @desc Cancel order
 * @route GET /createorder
 * @access Public
 */
const cancelOrder = asyncHandler(async (req, res) => {
  res.render('cancel');
});

export { createOrder, confirmOrder, cancelOrder };
