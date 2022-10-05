// Require express
const express = require("express");
const methodOverride = require("method-override");

// Require mongoose
const mongoConfig = require("./config");

// Require dotenv
require("dotenv").config();


// Create a new express app
const app = express();

// Identify the port
const PORT = process.env.PORT || 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use("/logs", require("./routes/logRoutes"));


// Bring in packaged routes
const logRoutes = require("./routes/logRoutes");
const { $where } = require("./models/logs");


// Set up the listener
app.listen(PORT, () => console.log(`Listening on port", ${PORT}`));


// Connect to the database
mongoConfig();
