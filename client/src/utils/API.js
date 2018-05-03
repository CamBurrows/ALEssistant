import axios from "axios";

export default {
  // Gets all ingredients
  login: function() {
    return axios.get("/login")
  },
  signUp: function() {
    return axios.get("/signup")
  },
  getIngredients: function() {
    return axios.get("/api/ingredients");
  },
  // Adds an ingredient
  addIngredient: function(ingredient) {
    return axios.post("/api/ingredients", ingredient);
  },
  // Gets the ingredient with the given id
  removeIngredient: function(id) {
    return axios.delete("/api/ingredients/" + id);
  },
  // Get all recipes
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  // Adds a recipe
  addRecipe: function(recipe) {
    return axios.post("/api/books", recipe);
  },
  // Deletes a recipe
  removeRecipe: function(id) {
    return axios.delete("/api/ingredients/" + id);
  }
};