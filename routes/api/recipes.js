const router = require('express').Router();
const db = require("../../models/");

//PostMan says it works
router.get('/recipes', function(req, res) {
  db.Recipe.find({})
  .then(
    dbRecipe => res.json(dbRecipe)
  )
});

//
router.get('/recipes/:id', function(req, res) {
  db.Recipe.find({_id:req.params.id})
  .then(
    dbRecipe => res.json(dbRecipe)
  )
});

//PostMan says it works
router.delete('/recipes/:id', function(req, res) {
  db.Recipe.remove({_id:req.params.id})
  .then(
    dbRecipe => res.json(dbRecipe)
  )
});

//not showing up in Robo 3T properly, only the "Chocolate Malt" shows up, no "Pale Malt"
//db.getCollection('recipes').insert({name: "Porter", batchSize: "10", batchUnit: "gallons", style: "Porter", yeast: "US-05", grains: [{name: "Pale Malt", amount: "20", name: "Chocolate Malt", amount: "3"}], hops: [{name: "Cascade", amount: "2", timeAdded: "60"}]})

module.exports = router;

