const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./db');
const router = require('./router');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

db.authenticate()
  .then(() => console.log("Database is connected..."))
  .catch(err => console.log("Error: " + err));



app.use("/gigs", router);

const port = 7000;

app.listen(port, () => console.log(`Server started on port ${port}`));
