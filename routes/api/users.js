const router = require('express').Router();
const usersController = require("../../controllers/usersController.js");

//PostMan says it works
router.get('/users', usersController.findAll);

//PostMan says it works
router.get('/users/:id', usersController.findOne);


//Needs testing and validation
//PostMan is throwing an error for this:
//"localhost:3001/api/users/?email=tim@foo.com&userName=tim&password=foo"
// router.post('/users/:id', function(req, res) {
//   console.log("req.params = " + req.params)
//   db.User.create({email: req.params.email, userName: req.params.userName, password: req.params.password})
//   .then(function(dbUser){res.json(dbUser)})
//   .catch(error)
// });

//Seems to work, but please validate
router.delete('/users/:id', usersController.remove);


module.exports = router;