const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true//,
    //match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userName: {
    type: String,
    trim: true,
    required: true
  },
  password: { //this will be hashed with bCrypt
    type: String,
    required: true
  },
  recipes: [{
    _recipeId: {
      type: Schema.Types.ObjectId,
      ref: "Recipe"
    }
  }],
  ingredientsInventory: [{
    _inventoryId:
    {
      type: Schema.Types.ObjectId,
      ref: "IngredientsInventory"
    }
  }]
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;

