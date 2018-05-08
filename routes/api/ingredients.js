const router = require('express').Router();
const ingredientsController = require("../../controllers/ingredientsController.js");

router.post('/ingredients', ingredientsController.create);

router.get('/ingredients', ingredientsController.findAll);

router.get('/ingredients/:id', ingredientsController.findOne);

router.delete('/ingredients/:id', function(req, res) {
  db.IngredientsInventory.remove({_id:req.params.id})
  .then(
    dbIngredientsInventory => res.json(dbIngredientsInventory)
  )
});

module.exports = router;