const router = require('express').Router();
const ingredientsController = require("../../controllers/ingredientsController.js");

//This hard-coded route "works", but needs refinement
router.post('/ingredients', ingredientsController.create);

//possible refinement of the above
router.post('/ingredients/:id', function(req, res) {
  db.IngredientsInventory.create({name: req.params.name, type: req.params.type, quantity: req.params.quantity, units: req.params.units, cost: req.params.cost, _userId: req.params.userId})
  .then(function(dbIngredients){res.json(dbIngredients)})
});


//PostMan says it works
router.get('/ingredients/:id', ingredientsController.findAll);


//PostMan says it works
//router.get('/ingredients/:id', ingredientsController.findOne);



// router.delete('/ingredients/:id', function(req, res) {
//   db.IngredientsInventory.remove({_id:req.params.id})
//   .then(
//     dbIngredientsInventory => res.json(dbIngredientsInventory)
//   )
// });

router.delete('/ingredients/:id', ingredientsController.remove);

module.exports = router;