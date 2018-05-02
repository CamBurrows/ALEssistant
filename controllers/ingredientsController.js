const db = require('../models');

module.exports = {
  create: function(req, res) {
    console.log("req body = " + JSON.stringify(req.body))
    db.IngredientsInventory.create(req.body)
    .then(function(dbIngredients){res.json(dbIngredients)})
    .catch(function(err) {
      console.log(err);
    });
  },
  findAll: function(req, res) {
    db.IngredientsInventory.find({})
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
  }
};