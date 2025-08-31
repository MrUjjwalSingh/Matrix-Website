const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const galleryController = require('../controllers/galleryController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.use(auth);
router.get('/', galleryController.getAllGallery);
router.post('/', upload.single('image'), galleryController.createGalleryImage);
router.put('/:id', galleryController.updateGalleryImage);
router.delete('/:id', galleryController.deleteGalleryImage);

module.exports = router;
