const Team = require('../models/Team');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

exports.getAllTeam = async (req, res) => {
  try {
    const team = await Team.find().sort({ createdAt: -1 });
    res.json({ success: true, message: 'Team members fetched.', data: team });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    let imageUrl = req.body.image; // Default to provided URL

    // If a file was uploaded, process it with Cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'matrix_team',
        resource_type: 'image'
      });
      fs.unlinkSync(req.file.path); // Remove local file
      imageUrl = result.secure_url;
    }

    const { name, role } = req.body;
    const member = new Team({ name, role, image: imageUrl });
    await member.save();
    res.status(201).json({ success: true, message: 'Team member created.', data: member });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    let updateData = { ...req.body };

    // If a file was uploaded, process it with Cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'matrix_team',
        resource_type: 'image'
      });
      fs.unlinkSync(req.file.path); // Remove local file
      updateData.image = result.secure_url;
    }

    const updated = await Team.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: 'Team member not found.' });
    res.json({ success: true, message: 'Team member updated.', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Team.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Team member not found.' });
    res.json({ success: true, message: 'Team member deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

// Public route for frontend
exports.getTeamMembers = async (req, res) => {
  try {
    const team = await Team.find().sort({ createdAt: -1 });
    res.json({ success: true, message: 'Team members fetched.', data: team });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};
