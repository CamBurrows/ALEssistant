const db = require('../models');
var jwt = require('jsonwebtoken');

module.exports = {

  //Sends all user data to '/api/users'
  findAll: function(req, res) {
    db.User.find({})
    .then(dbUser => res.json(dbUser))
    .catch(err => console.log(err));
  },

  //Sends the user data of the user with the user id supplied to '/api/users/:id 
  findOne: function(req, res) {
    db.User.find({_id:req.params.id})
    .populate("recipes")
    .populate("ingredientsInventory")
    .then(dbUser => res.json(dbUser))
  },

  //Creates a user with a token on sign up
  create: function(req, res) {
    db.User.create(req.body)
      .then(user => {
        const token = jwt.sign({userId: user._id, email: user.email}, 'my secret');
        res.json({
          user: user,
          token: token
        });
      })
      .catch(err => {
        console.log(err);
        res.json({message: 'did not create'});
      });
  },
  
  //Deletes a user and all user data from the database
  remove: function(req, res) {
    db.User.remove({_id:req.params.id})
    .then(dbUser => res.json(dbUser))
  },

  //Logs a user in, and creates a token
  start: function(req, res) {
    if(!req.body.email){
      res.status(400).send('email required');
    }
    if(!req.body.password){
      res.status(400).send('password required');
    }
    db.User.findOne({email: req.body.email})
      .then(user => {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if(isMatch) {
            const token = jwt.sign({userId: user._id, email: user.email}, 'my secret');
            res.status(200).json({
              user: user,
              token: token
            });
          } else {
            res.status(400).json({message: 'Invalid Email/Password.'});
          }
        });
      })
      .catch(err => res.status(400).json(err));
  }
}