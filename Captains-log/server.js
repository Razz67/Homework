// Require express
const express = require("express");
// Create a new express app
const app = express();

// Require dotenv
require("dotenv").config();

// Require mongoose
const mongooseConfig = require("./config");

const methodOverride = require("method-override");


// Identify the port
const PORT = process.env.PORT || 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());



// Bring in packaged routes
const logRoutes = require("./routes/logRoutes");
const { $where } = require("./models/logs");

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use("/logs", require("./routes/logRoutes"));

// Set up the listener
app.listen(PORT, () => console.log(`Listening on port", ${PORT}`));


// Connect to the database
mongooseConfig();
