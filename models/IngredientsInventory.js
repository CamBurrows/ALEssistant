const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const IngredientsInventorySchema = new Schema({
    name: {
        type: String, //Pale Malt, Crystal, Roasted Barley, Cascade, US-05, etc
        trim: true,
        required: true
    },
    type: { // grain, hops, or yeast
        type: String,
        trim: true,
        required: true
    },
    quantity: { //not required in case we want to list something that we might not have in inventory yet
        type: Number,
        trim: true
    },
    units: { //pounds, ounces, grams
        type: String,
        required: true
    },
    cost: {
        Type: Number, //not required in case we are adding something we don't yet know the cost of
    },
        _userId: {
          type: Schema.Types.ObjectId,
          ref: "User"
    }
});

// This creates our model from the above schema, using mongoose's model method
const IngredientsInventory = mongoose.model("IngredientsInventory", IngredientsInventorySchema);
module.exports = IngredientsInventory;
// Export the IngredientsInventory