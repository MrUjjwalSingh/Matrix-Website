const express = require('express');
const router = express.Router();
const { addResponse, getAllResponses, deleteResponse } = require('../controllers/formController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route
router.post('/', addResponse);

// Admin-only routes
router.get('/admin', authMiddleware, getAllResponses);
router.delete('/admin/:id', authMiddleware, deleteResponse);

module.exports = router;
