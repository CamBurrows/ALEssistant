const db = require('../models');

module.exports = {
  create: function(req, res) {
    //console.log("req body = " + JSON.stringify(req.body))
    db.IngredientsInventory.create(req.body)
    .then(function(dbIngredients){
      console.log(dbIngredients)
      return db.User.findOneAndUpdate({_id: dbIngredients._userId}, {$push: {ingredientsInventory: dbIngredients._id } }, { new: true }) // The Money Shot
    })
    .then(function(dbIngredients){
      console.log("dbIngredients = " + dbIngredients)
      res.json(dbIngredients)
    })
    .catch(function(err) {
      console.log(err);
    });
  },
  findAll: function(req, res) {
    console.log("req.params = " + JSON.stringify(req.params) + "\nreq.body = " + JSON.stringify(req.body))
    db.IngredientsInventory.find({_id:req.params.id})
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
  }
};