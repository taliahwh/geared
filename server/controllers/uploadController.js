import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import cloudinary from '../utils/imageUpload.js';

/**
 * @desc
 * @route POST /upload
 * @access Public
 */
const uploadPostPhoto = asyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    public_id: `image_${Math.floor(100000 + Math.random() * 900000)}`,
    width: 1200,
    height: 1200,
    crop: 'fill',
    quality_analysis: 1,
    folder: 'post-images',
  });
  res.status(201).send(result.url);
});

const uploadProfilePhoto = asyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    public_id: `image_${Math.floor(100000 + Math.random() * 900000)}`,
    width: 400,
    height: 400,
    crop: 'fill',
    quality_analysis: 1,
    folder: 'profile-images',
  });
  res.status(201).send(result.url);
});

export { uploadPostPhoto, uploadProfilePhoto };
