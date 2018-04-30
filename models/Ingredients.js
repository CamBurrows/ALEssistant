const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const IngredientsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    abbrev: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
        trim: true
    },
    units: {
        type: String,
        required: true
    },
    cost: {
        Type: Number,
        required: true
    },
    notes: {
        type: String,
        trim: true
    }
});

// This creates our model from the above schema, using mongoose's model method
const Ingredients = mongoose.model("Ingredients", IngredientsSchema);

// Export the Article model
module.exports = Ingredients;