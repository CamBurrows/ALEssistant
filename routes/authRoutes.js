var express = require('express');
var router = express.Router();
var db = require('../models');
var jwt = require('jsonwebtoken');

router.post('/signup', function(req, res) {
  console.log(req.body);
  db.User.create(req.body)
    .then(function(user) {
      console.log(user);
      res.json(user);
    })
    .catch(function(err) {
      console.log(err);
      res.json({message: 'did not create'});
    });
  
  
});

 

router.post('/signin', function(req, res) {
  if(!req.body.username){
    res.status(400).send('username required');
  }
  if(!req.body.username){
    res.status(400).send('username required');
  }
  db.User.findOne({username: req.body.username})
    .then(function(user) {
      //compare passwords
      var token = jwt.sign({userId: user.id, username: user.username}, 'my secret');
      res.status(200).json({
        token: token,
        user: user
      });
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;