const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

router.post('/signup', function(req, res) {
  console.log(req.body);
  User.create(req.body)
    .then(function(user) {
      console.log(user);
      res.status(200).json(user);
    })
    .catch(function(err) {
      console.log(err);
      res.status(400).json({message: 'did not create'});
    });
});

 

router.post('/signin', function(req, res) {
  if(!req.body.userName){
    res.status(400).send('username required');
  }
  if(!req.body.userName){
    res.status(400).send('username required');
  }
  User.findOne({userName: req.body.userName})
    .then(function(user) {
      //compare passwords
      var token = jwt.sign({userId: user.id, userName: user.userName}, 'my secret');
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