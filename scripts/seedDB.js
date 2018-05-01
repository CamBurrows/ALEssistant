const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/alessistantdb",
    {
        useMongoClient: true
    }
);

const userSeed = [
    {
        email: "Tim@foo.com",
        userName: "Baby Seal Brewery",
        password: "foo"
    },
    {
        email: "Cam@foo.com",
        userName: "Cam's Brew",
        password: "foo2"
    }

];

db.users
    .remove({})
    .then(() => db.users.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
