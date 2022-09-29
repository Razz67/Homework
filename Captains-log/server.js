// Load Express
const express= require("express");
const methodOverride = require("method-override");

// mongConfig
const mongoConfig = require("./config");

// Bring in packaged routes
const logRoutes = require("./routes/logRoutes");

// Require dotenv
require("dotenv").config();

// Create express app
const app = express();

// Identify the port
const port = process.env.PORT;

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// ********* Middleware **********
// body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// express json
app.use(express.json());

// method override
app.use(methodOverride("_method"));

app.use("/logs", logRoutes);


// listen to port
app.listen(port, () =>  console.log("listening on port", port));

// Connect to mongo
mongoConfig();
