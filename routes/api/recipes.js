const router = require('express').Router();
const recipeController = require("../../controllers/recipeController.js");

router.get('/recipes/:id', recipeController.findAll);

router.get('/recipes/edit/:id', recipeController.findOne);

router.delete('/recipes/:id', recipeController.remove);

router.post("/recipes", recipeController.create);

router.put('/recipes/:id', recipeController.update);

router.put('/recipes/brews/:id', recipeController. newBrew)

module.exports = router;

