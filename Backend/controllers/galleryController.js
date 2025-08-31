const Gallery = require('../models/Gallery');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

exports.getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ createdAt: -1 });
    res.json({ success: true, message: 'Gallery images fetched.', data: gallery });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.createGalleryImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded.' });
    }
    const result = await cloudinary.uploader.upload(req.file.path, { folder: 'matrix_gallery', resource_type: 'image' });
    fs.unlinkSync(req.file.path); // Remove local file
    const { alt, title } = req.body;
    const image = new Gallery({ src: result.secure_url, alt, title });
    await image.save();
    res.status(201).json({ success: true, message: 'Gallery image uploaded.', data: image });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.updateGalleryImage = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Gallery.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: 'Gallery image not found.' });
    res.json({ success: true, message: 'Gallery image updated.', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.deleteGalleryImage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Gallery.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Gallery image not found.' });
    res.json({ success: true, message: 'Gallery image deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

// Public route for frontend
exports.getGalleryImages = async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ createdAt: -1 });
    res.json({ success: true, message: 'Gallery images fetched.', data: gallery });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};
