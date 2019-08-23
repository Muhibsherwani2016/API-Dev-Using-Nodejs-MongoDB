const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const morgan = require("morgan");

// Database Connection
require("./mongo");

// Models
require("./model/Post");

//Middleware
app.use(bodyParser.json())
    .use(morgan())

//Routes
app.use("/posts", require("./routes/posts"));

module.exports = app;