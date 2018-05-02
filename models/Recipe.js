const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var RecipeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    batchSize: {
        type: Number,
        trim: true
    },
    batchUnit: {
        type: String,
        trim: true,
        required: true
    },
    style: {
        type: String,
        trim: true
    },
    yeast: {
        type: String,
        required: true,
        trim: true
    },
    grains: [{
        name: {
            type: String,
            trim: true
        },
        amount: {
            type: Number,
            trim: true
        },
//        required: true,
    }],
    hops: [{
        name: {
            type: String,
            trim: true
        },
        amount: {
            type: Number,
            trim: true
        },
        // alphaAcids: {  ***Possible later implementation***
        //     type: Number,
        //     trim: true
        // },
        timeAdded: {
            type: String,
            trim: true
        }
    }],
    exotics: [{
        name: {
            type: String,
            trim: true
        },
        amount: {
            type: Number,
            trim: true
        },
        units: {
            type: String,
            trim: true
        }
    }],
    sessions: [{
        brewed: {
            type: Boolean
        },
        dateBrewed: {
            type: Date,
            default: Date.now, 
            required: true
        },
        fermentationComplete: {
        type: Boolean,
        default: false,
        required: true
        },
        packaged: {
            type: Boolean,
            default: false,
            required: true
        },
        notes: { //Anything odd that might have happened during the brew session/fermentation/packaging
            type: String,
            trim: true
        }
    }]
});

// This creates our model from the above schema, using mongoose's model method
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
