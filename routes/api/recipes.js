const router = require('express').Router();
const recipeController = require("../../controllers/recipeController.js");

//PostMan says it works
router.get('/recipes/:id', recipeController.findAll);

//Postman approved
//router.get('/recipes/:id', recipeController.findOne);


router.delete('/recipes/:id', recipeController.remove);

router.post("/recipes", recipeController.create);

//router.put('/recipes/:id', recipeController.update);

//not showing up in Robo 3T properly, only the "Chocolate Malt" shows up, no "Pale Malt"
//db.getCollection('recipes').insert({name: "Porter", batchSize: "10", batchUnit: "gallons", style: "Porter", yeast: "US-05", grains: [{name: "Pale Malt", amount: "20", name: "Chocolate Malt", amount: "3"}], hops: [{name: "Cascade", amount: "2", timeAdded: "60"}]})

module.exports = router;

