import dotenv from 'dotenv';
import Post from './models/postModel.js';
import posts from './data/posts.js';
import User from './models/userModel.js';
import users from './data/users.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Post.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);
    await Post.insertMany(posts);

    console.log('Data imported!'.green.inverse);
    process.exit(1);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Post.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit(1);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
