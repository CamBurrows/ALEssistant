const router = require('express').Router();
const db = require("../../models/");

//PostMan says it works
router.get('/users', function(req, res) {
  db.User.find({})
  .then(
    dbUser => res.json(dbUser)
  )
});

//PostMan says it works
router.get('/users/:id', function(req, res) {
  db.User.find({_id:req.params.id})
  .then(
    dbUser => res.json(dbUser)
  )
});


//Needs testing and validation
//PostMan is throwing an error for this:
//"localhost:3001/api/users/?email=tim@foo.com&userName=tim&password=foo"
router.post('/users/:id', function(req, res) {
  console.log("req.params = " + req.params)
  db.User.create({email: req.params.email, userName: req.params.userName, password: req.params.password})
  .then(function(dbUser){res.json(dbUser)})
  .catch(error)
});

//Seems to work, but please validate
router.delete('/users/:id', function(req, res) {
  db.User.remove({_id:req.params.id})
  .then(
    dbUser => res.json(dbUser)
  )
});


module.exports = router;