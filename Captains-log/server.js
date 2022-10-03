// Require express
const express = require("express");
const methodOverride = require("method-override");


// Require mongoose
const mongoConfig = require("./config");

// Bring in packaged routes
const logRoutes = require("./routes/logRoutes");

// Require dotenv
require("dotenv").config();

// Create a new express app
const app = express();

// Identify the port
const port = process.env.PORT || 3000;

// Connect to the database


// set veiw engint to jsx
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// // // Require the controllers
// // const logController = require("./controllers/logController");

// // Use the controllers
// app.use("/logs", logController);

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use("/logs", logRoutes);

// Set up the listener
app.listen(port, () => {
    console.log("Listening on port", port);
});


// Connect to the database
mongoConfig();
