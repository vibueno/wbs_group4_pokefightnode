const express = require('express');
const router = express.Router();
const appController = require('../controllers/App');

// If the requested page has not been found
router.get('/', appController.pageNotFound);

module.exports = router;
