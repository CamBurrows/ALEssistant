const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientsInventorySchema = new Schema({
    name: {
        type: String, //Pale Malt, Roasted Barley, Cascade hops, US-05, etc
        trim: true,
        required: true
    },
    type: { // grain, hops, yeast, or "exotic" (ie vanilla beans, honey, etc) ingredients
        type: String,
        trim: true,
        required: true
    },
    quantity: {         // not required in case we want to list something
        type: Number,   // that we might not have in inventory yet,
        trim: true,     // that is why it defaults to zero
        default: 0
    },
    units: { //pounds, ounces, grams
        type: String,
        required: true
    },
    cost: {
        type: Number, //not required in case we are adding something we don't yet know the cost of
        trim: true
    },
    _userId: {  // will be used to link to the specific account that made this ingredient
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const IngredientsInventory = mongoose.model("IngredientsInventory", IngredientsInventorySchema);

module.exports = IngredientsInventory;