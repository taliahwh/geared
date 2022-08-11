import path from 'path';
import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/imageUpload.js';

// Controllers
import {
  uploadPostPhoto,
  uploadProfilePhoto,
} from '../controllers/uploadController.js';

const router = express.Router();

const storage = multer.diskStorage({});

const upload = multer({ storage });

router.post('/post', upload.single('postImage'), uploadPostPhoto);

router.post('/profile', upload.single('profileImage'), uploadProfilePhoto);

export default router;
