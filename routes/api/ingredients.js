const router = require('express').Router();
const ingredientsController = require("../../controllers/ingredientsController.js");

//IngredientsInventory model related routes
router.post('/ingredients', ingredientsController.create);

router.get('/ingredients/:id', ingredientsController.findAll);

router.get('/ingredients/edit/:id', ingredientsController.findOne);

router.put('/ingredients/:id', ingredientsController.update);

router.delete('/ingredients/:id', ingredientsController.remove);


module.exports = router;