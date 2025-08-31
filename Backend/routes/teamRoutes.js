const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const teamController = require('../controllers/teamController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.use(auth);
router.get('/', teamController.getAllTeam);
router.post('/', upload.single('image'), teamController.createTeamMember);
router.put('/:id', upload.single('image'), teamController.updateTeamMember);
router.delete('/:id', teamController.deleteTeamMember);

module.exports = router;
