const db = require('../models');

module.exports = {
  create: function(req, res) {
    db.Recipe.create(req.body.newRecipe)
    .then(function(dbRecipes){
      return db.User.findOneAndUpdate({_id: dbRecipes._userId}, {$push: {recipe: dbRecipes._id } }, { new: true }) // The Money Shot
    })
    .then(function(dbRecipes){
      console.log("dbRecipes = " + dbRecipes)
      res.json(dbRecipes)
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  findAll: function(req, res) {
    db.Recipe.find({_userId: req.params.id})
    .then(function(dbRecipes) {
      res.json(dbRecipes);
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  findOne: function(req, res) {
    db.Recipe.find({_id:req.params.id})
    .then(function(dbRecipe) {
      res.json(dbRecipe)
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  remove: function(req, res) {
    db.Recipe.remove({_id:req.params.id})
    .then(function(dbRecipe) {
      res.json(dbRecipe)
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  update: function(req, res) {
    db.Recipe.findOneAndUpdate(
      {_id:req.params.id}, 
      req.body,
      { new: true, overwrite: true }
    )
    .then(function(dbRecipes){
      res.json(dbRecipes)
    })
      .catch(function(err) {
        console.log(err);
      });
  },
  newBrew: function(req, res) {
    db.Recipe.findOneAndUpdate(
      {_id:req.params.id}, 
      {$push: {sessions: req.body } }, 
      { new: true }
    )
    .then(function(dbRecipes){
      res.json(dbRecipes)
    })
      .catch(function(err) {
        console.log(err);
      });
  },
};