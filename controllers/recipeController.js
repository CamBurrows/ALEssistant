const db = require('../models');

module.exports = {
  create: function(req, res) {
    console.log("req body = " + JSON.stringify(req.body))
    db.Recipe.create(req.body)
    .then(function(dbRecipes){
      console.log(dbRecipes)
      return db.User.findOneAndUpdate({_id: dbRecipes._userId}, {$push: {recipe: dbRecipe._id } }, { new: true }) // The Money Shot
    })
  },
  findAll: function(req, res) {
    db.Recipe.find({})
    .then(function(dbRecipe) {
      res.json(dbRecipe);
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
  }
};