const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe"
    }
  ],
  ingredientsInventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "IngredientsInventory"
    }
  ]
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

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;

