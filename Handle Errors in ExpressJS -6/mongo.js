const mongoose = require("mongoose");
require("dotenv").config();

const mongoDBErrors = require("mongoose-mongodb-errors");

mongoose.Promise = global.Promise;
console.log(process.env.MONGOURI);

mongoose.plugin(mongoDBErrors);

mongoose.connect(process.env.MONGOURI);

