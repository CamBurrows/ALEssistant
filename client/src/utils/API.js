import axios from "axios";

export default {
  // Gets all ingredients
  login: function(user) {
    return axios.post("/signin", user)
  },
  signUp: function(user) {
    return axios.post("/signup", user)
  },

  getIngredients: function(id, headers) {
    return axios({
      method: 'get',
      url: "/api/ingredients/" + id,
      headers: headers
    });
  },
  // Adds an ingredient
  addIngredient: function(ingredient, headers) {
    //return axios.post("/api/ingredients", ingredient);
    return axios({
      method: 'post',
      url: "/api/ingredients",
      data: ingredient,
      headers: headers
    });
  },
  findIngredient: function (id) {
    return axios.get("/api/ingredients/edit/" + id)
  },
  updateIngredient: function (id, ingredient){
    return axios.put("/api/ingredients/" + id, ingredient)
  },
  // Gets the ingredient with the given id
  removeIngredient: function(id) {
    return axios.delete("/api/ingredients/" + id);
  },

  // Get all recipes
  getRecipes: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Adds a recipe
  addRecipe: function(recipe) {
    return axios.post("/api/recipes", recipe);
  },
  updateRecipe: function(id, recipe){
    return axios.put("/api/recipes/"+ id, recipe)
  },
  findRecipe: function(id) {
    return axios.get("/api/recipes/edit/" + id)
  },
  // Deletes a recipe
  removeRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },

  newBrew: function(id, brew) {
    return axios.put("/api/recipes/brews/" + id, brew)
  }
};