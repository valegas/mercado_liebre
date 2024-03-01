const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const ohterControllerController = require('../controllers/homeController');

router.get('/', ohterController.home); 
router.get('/search', ohterController.search); 

module.exports = router;