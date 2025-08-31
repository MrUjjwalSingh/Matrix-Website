const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const projectController = require('../controllers/projectController');

router.use(auth);
router.get('/', projectController.getAllProjects);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
