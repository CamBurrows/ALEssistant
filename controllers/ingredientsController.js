const db = require('../models');


module.exports = {
  create: function(req, res) {
    db.IngredientsInventory.create(req.body)
    .then(function(dbIngredients){
      return db.User.findOneAndUpdate({_id: dbIngredients._userId}, {$push: {ingredientsInventory: dbIngredients._id } }, { new: true }) // The Money Shot
    })
    .then(function(dbIngredients){
      res.json(dbIngredients)
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  findAll: function(req, res) {
    db.IngredientsInventory.find({_userId: req.params.id})
    .then(function(dbIngredients) {
      res.json(dbIngredients);
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  findOne: function(req, res) {
    db.IngredientsInventory.find({_id:req.params.id})
    .then(function(dbIngredients) {
      res.json(dbIngredients)
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  remove: function(req, res) {
    db.IngredientsInventory.remove({_id:req.params.id})
    .then(function(dbIngredients) {
      res.json(dbIngredients)
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  update: function(req, res) {
    db.IngredientsInventory.findOneAndUpdate(
      {_id:req.params.id}, 
      req.body,
      { new:true, overwrite: true }
    )
    .then(function(dbIngredients){
      res.json(dbIngredients)
    })
      .catch(function(err) {
        console.log(err);
      });
  }
};