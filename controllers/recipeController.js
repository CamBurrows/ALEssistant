const db = require('../models');

module.exports = {

  //Create a new recipe
  create: function(req, res) {
    db.Recipe.create(req.body.newRecipe)
    .then(dbRecipes => db.User.findOneAndUpdate({_id: dbRecipes._userId}, {$push: {recipe: dbRecipes._id } }, { new: true }))
    .then(dbRecipes => res.json(dbRecipes))
    .catch(err =>console.log(err))
  },

  //Sends all recipe data for a particular user to '/api/recipes'
  findAll: function(req, res) {
    db.Recipe.find({_userId: req.params.id})
    .then(dbRecipes => res.json(dbRecipes))
    .catch(err => console.log(err))
  },

  //Sends the recipe data of 1 particular recipe to '/api/recipes/:id
  findOne: function(req, res) {
    db.Recipe.find({_id:req.params.id})
    .then(dbRecipe => res.json(dbRecipe))
    .catch(err => console.log(err))
  },

  //Deletes 1 particular recipe with the passed in id
  remove: function(req, res) {
    db.Recipe.remove({_id:req.params.id})
    .then(dbRecipe => res.json(dbRecipe))
    .catch(err => console.log(err))
  },

  //Allows the user to update the data of 1 recipe
  update: function(req, res) {
    db.Recipe.findOneAndUpdate(
      {_id:req.params.id}, 
      req.body,
      { new: true, overwrite: true }
    )
    .then(dbRecipes => res.json(dbRecipes))
    .catch(err => console.log(err))
  },

  //Allows the user to document the start of and track the progress of brewing a new batch
  newBrew: function(req, res) {
    db.Recipe.findOneAndUpdate(
      {_id:req.params.id}, 
      {$push: {sessions: req.body } }, 
      { new: true }
    )
    .then(dbRecipes => res.json(dbRecipes))
    .catch(err => console.log(err))
  },
};