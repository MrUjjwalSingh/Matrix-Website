const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    src: { type: String, required: true }, // Cloudinary URL
    alt: { type: String, required: true },
    title: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
