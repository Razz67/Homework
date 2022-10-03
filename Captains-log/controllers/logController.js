const express = require("express");
const router = express.Router();

//Bring in SCHEMA
const Log = require("../models/logs");

// Bring in ROUTES

// INDEX ROUTE
const findAllLogs = (req, res) => {
	Log.find({}, (error, foundLogs) => {
		if (error) {
			res.status(400).json(err);
		} else {
			res.status(200).render("logs/Index", { logs: foundLogs });
		}
	});
};

//NEW ROUTE
const showNewView = (req, res) => {
	res.render("logs/New");
};

//DELETE ROUTE
const deleteOneLog = (req, res) => {
	Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
		res.status(200).redirect("logs");
		}
	});
};

//UPDATE ROUTE
const updateOneLog = (req, res) => {
	if (req.body.shipIsBroken === "on" || req.body.shipIsBroken === "true") {
		req.body.shipIsBroken = true;
	} else {
		req.body.shipIsBroken = false;
	}
	Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog)	=> {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect(`/logs/${req.params.id}`);
		}
	});
};

//CREATE ROUTE
const createNewLog = (req, res) => {
	if (req.body.shipIsBroken === "on" || req.body.shipIsBroken === "true") {
		//if checked, req.body.shipIsBroken is set to 'on'
		req.body.shipIsBroken = true;
	} else {
		//if not checked, req.body.shipIsBroken is undefined
		req.body.shipIsBroken = false;
	}
	Log.create(req.body, (err, createdLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/logs");
		}	
	});
};


//EDIT ROUTE
const showEditView = (req, res) => {
	Log.findById(req.params.id, (err, foundLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("logs/Edit", { log: foundLog });

		}
	});
};


//CREATE SHOW ROUTE
const showOneLog = (req, res) => {
	Log.findById(req.params.id, (err, foundLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("logs/Show", { log: foundLog });
		}	
	});
};



module.exports = {
	findAllLogs,
	showNewView,
	createNewLog,
	showOneLog,
	showEditView,
	updateOneLog,
	deleteOneLog,
};
