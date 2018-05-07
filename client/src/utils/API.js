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
    return axios({
      method: 'post',
      url: "/api/ingredients",
      data: ingredient,
      headers: headers
    });
  },
  findIngredient: function (id, headers) {
    return axios({
      method: 'get',
      url: "/api/ingredients/edit/" + id,
      headers: headers
    });
  },
  updateIngredient: function (id, ingredient, headers){
    return axios({
      method: 'put',
      url: "/api/ingredients/" + id,
      data: ingredient,
      headers: headers
    });
  },
  // Gets the ingredient with the given id
  removeIngredient: function(id, headers) {
    console.log(headers);
    return axios({
      method: 'delete',
      url: "/api/ingredients/" + id,
      headers: headers
    });
  },

  // Get all recipes
  getRecipes: function(id, headers) {
    return axios({
      method: 'get',
      url: "/api/recipes/" + id,
      headers: headers
    });
  },
  // Adds a recipe
  addRecipe: function(recipe, headers) {
    return axios({
      method: 'post',
      url: "/api/recipes",
      data: recipe,
      headers: headers
    });
  },
  updateRecipe: function(id, recipe, headers){
    return axios({
      method: 'put',
      url: "/api/recipes/" + id,
      data: recipe,
      headers: headers
    });
  },
  findRecipe: function(id, headers) {
    return axios({
      method: 'get',
      url: "/api/recipes/edit/" + id,
      headers: headers
    });
  },
  // Deletes a recipe
  removeRecipe: function(id, headers) {
    return axios({
      method: 'delete',
      url: "/api/recipes/" + id,
      headers: headers
    });
  },

  newBrew: function(id, brew) {
    return axios.put("/api/recipes/brews/" + id, brew)
  }
};