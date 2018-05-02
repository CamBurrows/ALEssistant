var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController.js');


router.post('/signup', usersController.create);

 

router.post('/signin', usersController.start);

module.exports = router;