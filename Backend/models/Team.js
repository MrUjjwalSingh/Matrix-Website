const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary URL
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);
