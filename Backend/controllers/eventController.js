const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.json({ success: true, message: 'Events fetched.', data: events });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const { title, date, time, venue, description } = req.body;
        const event = new Event({ title, date, time, venue, description });
        await event.save();
        res.status(201).json({ success: true, message: 'Event created.', data: event });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ success: false, message: 'Event not found.' });
        res.json({ success: true, message: 'Event updated.', data: updated });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Event.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ success: false, message: 'Event not found.' });
        res.json({ success: true, message: 'Event deleted.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};

// Public route for frontend
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.json({ success: true, message: 'Events fetched.', data: events });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error.', error: err.message });
    }
};
