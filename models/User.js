const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },  // regular expression to limit the user to a valid email address format
  userName: {
    type: String,
    trim: true,
    required: true
  },
  password: { //hashed with bCrypt
    type: String,
    required: true
  },
  recipes: [{ //later populated with all the recipes that match the _userId
    _recipeId: {
      type: Schema.Types.ObjectId,
      ref: "Recipe"
    }
  }],
  ingredientsInventory: [{ //later populated with all the ingredients that match the _userId
    _inventoryId:
    {
      type: Schema.Types.ObjectId,
      ref: "IngredientsInventory"
    }
  }]
});

UserSchema.pre('save', function(next) {
  var user = this;
  if(!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10, function(err, hashedPassword) {
    if(err) return next(err);
    user.password = hashedPassword;
    next();
  });
});

UserSchema.methods.comparePassword = function(plainTextPassword, next) {
  bcrypt.compare(plainTextPassword, this.password, function(err, isMatch) {
    if(err) return next(err);
    next(null, isMatch);
  });
}

const User = mongoose.model("User", UserSchema);

module.exports = User;