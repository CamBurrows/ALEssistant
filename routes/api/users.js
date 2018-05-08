const router = require('express').Router();
const usersController = require("../../controllers/usersController.js");

//User model related routes
router.get('/users', usersController.findAll);

router.get('/users/:id', usersController.findOne);

router.delete('/users/:id', usersController.remove);

module.exports = router;