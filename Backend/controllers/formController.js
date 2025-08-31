const FormResponse = require('../models/FormResponse');

const addResponse = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }
        const response = new FormResponse({ name, email, message });
        await response.save();
        res.status(201).json({ success: true, message: 'Form submitted successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

const getAllResponses = async (req, res) => {
    try {
        const responses = await FormResponse.find().sort({ createdAt: -1 });
        res.json({ success: true, message: 'Responses fetched.', data: responses });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

const deleteResponse = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await FormResponse.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Response not found.' });
        }
        res.json({ success: true, message: 'Response deleted.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

module.exports = { addResponse, getAllResponses, deleteResponse };
