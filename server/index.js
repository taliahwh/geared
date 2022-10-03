import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import engines from 'consolidate';
import paypal from 'paypal-rest-sdk';
import colors from 'colors';

import { Server } from 'socket.io';
import { createServer } from 'http';

// API Routes
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import paypalRoutes from './routes/paypalRoutes.js';

// Error handling middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('ejs', engines.ejs);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views/'));

// Allows access to JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '15MB' }));
app.use(cors());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/paypal', paypalRoutes);

app.get('/', (req, res) => {
  res.send('API is running..');
});

/* ----------------------------------------------------------------------------- */

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// SOCKET.IO
const onSendMessage = (data) => {
  console.log(data);
  io.emit('receive_message', data);
};

const onConnection = (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Send a message to the client
  socket.emit('welcome', 'Hello from the server!');

  // Receive message from the client
  socket.on('client', (arg) => console.log(arg));
  // socket.on('send_msg', onSendMessage);
  socket.on('send_message', onSendMessage);

  socket.on('disconnect', (reason) =>
    console.log(`User disconnected due to ${reason}.`)
  );
};

io.on('connection', onConnection);

/* ----------------------------------------------------------------------------- */

// PAYPAL
paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET,
});

// // Renders index.ejs
// app.get('/paypal', (req, res) => {
//   res.render('index');
// });

// // CREATE ORDER
// app.get('/paypal/createorder', (req, res) => {
//   // const paymentId =

//   var create_payment_json = {
//     intent: 'sale',
//     payer: {
//       payment_method: 'paypal',
//     },
//     redirect_urls: {
//       return_url: 'http://localhost:5000/api/paypal/success',
//       cancel_url: 'http://localhost:5000/api/paypal/cancel',
//     },
//     transactions: [
//       {
//         item_list: {
//           items: [
//             {
//               name: 'item',
//               sku: 'item',
//               price: '1.00',
//               currency: 'USD',
//               quantity: 1,
//             },
//           ],
//         },
//         amount: {
//           currency: 'USD',
//           total: '1.00',
//         },
//         description: 'This is the payment description.',
//       },
//     ],
//   };

//   paypal.payment.create(create_payment_json, (error, payment) => {
//     if (error) {
//       throw error;
//     } else {
//       console.log('Create Payment Response');
//       console.log(payment);
//       res.redirect(payment.links[1].href);
//       // res.send('OK');
//     }
//   });
// });

// app.get('/paypal/success', (req, res) => {
//   var PayerID = req.query.PayerID;
//   var paymentId = req.query.paymentId;

//   var execute_payment_json = {
//     payer_id: PayerID,
//     transactions: [
//       {
//         amount: {
//           currency: 'USD',
//           total: '1.00',
//         },
//       },
//     ],
//   };

//   paypal.payment.execute(
//     paymentId,
//     execute_payment_json,
//     function (error, payment) {
//       if (error) {
//         console.log(error.response);
//         throw error;
//       } else {
//         console.log('Get Payment Response');
//         console.log(JSON.stringify(payment));
//         res.render('success');
//       }
//     }
//   );
// });

// app.get('/paypal/cancel', (req, res) => {
//   res.render('cancel');
// });

/* ----------------------------------------------------------------------------- */

// Error handling middlewae
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

httpServer.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
