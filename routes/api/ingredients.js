const router = require('express').Router();
const db = require("../../models/");

router.post('/ingredients', function(req, res) {
  db.IngredientsInventory.create({name: "Pale Malt", type: "grain", quantity: "20", units: "pounds", cost: "2", _userId: "5ae769f382a736321c3c00cc"})
  .then(function(dbIngredients){res.json(dbIngredients)})
});

router.get('/ingredients', function(req, res) {
  db.IngredientsInventory.find({})
  .then(
    dbIngredients => res.json(dbIngredients)
  )
});

router.get('/ingredients/:id', function(req, res) {
  db.IngredientsInventory.find({_id:req.params.id})
  .then(
    dbIngredients => res.json(dbIngredients)
  )
});

module.exports = router;