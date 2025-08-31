const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const projectRoutes = require('./routes/projectRoutes');
const eventRoutes = require('./routes/eventRoutes');
const teamRoutes = require('./routes/teamRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

// Public API routes for frontend
const { getProjects } = require('./controllers/projectController');
const { getEvents } = require('./controllers/eventController');
const { getTeamMembers } = require('./controllers/teamController');
const { getGalleryImages } = require('./controllers/galleryController');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Public routes for frontend
app.get('/api/projects', getProjects);
app.get('/api/events', getEvents);
app.get('/api/team', getTeamMembers);
app.get('/api/gallery', getGalleryImages);

// Admin routes
app.use('/api/auth', authRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/admin/projects', projectRoutes);
app.use('/api/admin/events', eventRoutes);
app.use('/api/admin/team', teamRoutes);
app.use('/api/admin/gallery', galleryRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
