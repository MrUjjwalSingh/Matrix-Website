const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json({ success: true, message: 'Projects fetched.', data: projects });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

exports.createProject = async (req, res) => {
    try {
        const { title, description, tags, github } = req.body;
        const project = new Project({ title, description, tags, github });
        await project.save();
        res.status(201).json({ success: true, message: 'Project created.', data: project });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Project.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ success: false, message: 'Project not found.' });
        res.json({ success: true, message: 'Project updated.', data: updated });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Project.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ success: false, message: 'Project not found.' });
        res.json({ success: true, message: 'Project deleted.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

// Public route for frontend
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json({ success: true, message: 'Projects fetched.', data: projects });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};
