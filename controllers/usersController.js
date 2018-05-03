const db = require('../models');
var jwt = require('jsonwebtoken');

module.exports = {
  findAll: function(req, res) {
    db.User.find({})
    .then(
      dbUser => res.json(dbUser)
    )
    .catch(err => console.log(err));
  },
  findOne: function(req, res) {
    db.User.find({_id:req.params.id})
    .then(
      dbUser => res.json(dbUser)
    )
  },
  create: function(req, res) {
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
  }, 
  remove: function(req, res) {
    db.User.remove({_id:req.params.id})
    .then(
      dbUser => res.json(dbUser)
    )
  },
  start: function(req, res) {
    if(!req.body.email){
      res.status(400).send('username required');
    }
    if(!req.body.email){
      res.status(400).send('username required');
    }
    db.User.findOne({email: req.body.email})
      .then(function(user) {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if(isMatch) {
            var token = jwt.sign({userId: user._id, email: user.email}, 'my secret');
            res.status(200).json({
              user: user,
              token: token
            });
          } else {
            res.status(400).json({message: 'Invalid Email/Password.'});
          }
        });
      })
      .catch(function(err) {
        res.status(400).json(err);
      });
  }
}