import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import colors from 'colors';

import { Server } from 'socket.io';
import { createServer } from 'http';

// API Routes
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// Error handling middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

// Allows access to JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '15MB' }));
app.use(cors());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Error handling middlewae
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const onSendMessage = (data) => {
  console.log(data);
  io.emit('receive_msg', data);
};

const onConnection = (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Send a message to the client
  socket.emit('welcome', 'Hello from the server!');

  // Receive message from the client
  socket.on('client', (arg) => console.log(arg));
  socket.on('send_msg', onSendMessage);

  socket.on('disconnect', (reason) =>
    console.log(`User disconnected due to ${reason}.`)
  );
};

io.on('connection', onConnection);

httpServer.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
