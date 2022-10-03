const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Loading our Model of logs
const Log = require("../models/logs");


// Bring in controller functions (destructure methods)
const {
	findAllLogs,
	showNewView,
	createNewLog,
	showOneLog,
	showEditView,
	updateOneLog,
	deleteOneLog,
} = require("../controllers/logController");

// Bring in controller object (with methods attached)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get("/", findAllLogs);

// Setup "new" route
router.get("logs/new", showNewView);

// Setup "destroy" route
router.delete("/:id", deleteOneLog);

// Setup "update" route
router.put("/:id", updateOneLog);

// Setup "create" route
router.post("/logs", createNewLog);

// Setup "edit" route
router.get("/:id/edit", showEditView);


// Setup "show" route
router.get("/:id", showOneLog);


module.exports = router;