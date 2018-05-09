const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
        name: {
            type: String,
            required: true,
            trim: true
        },
        amount: {
            type: Number
        },
        units: {
            type: String
        }

    },
    grains: [{
        name: {
            type: String,
            trim: true
        },
        amount: {
            type: Number,
            trim: true
        },        //  required: true //eliminated this in case the user wants to make a mead
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
        // alphaAcids: {  //for later implementation when we are calculating IBUs.
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
        notes: {          // this allows the user to save notes on anything odd that
            type: String, // might have happened during this specific brew session
            trim: true    // such as a stuck mash, non-optimal mash temp, or off
        }                 // flavors in the final beer and possible causes thereof
    }],
        comments: [{
            comment:{           // This is for comments on the recipe in general,
            type: String
            }      // such as "toast the oats at 300F for 15 minutes"
        }],
        mashTemp: {
        type: Number,
        trim: true
        },
        mashTime: {
        type: Number,
        trim: true
        },
        boilTime: {
        type: Number,
        trim: true
        },
        fermentationTime: {
        type: Number,
        trim: true
        },
        _userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
        }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
