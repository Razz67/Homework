const Log = require("../models/logs");

// ROUTE     GET /logs    (index)
const findAllLogs = (req, res) => {
	// Find takes two arguments:
	//   1st: an object with our query (to filter our data and find exactly what we need)
	//   2nd: callback (with an error object and the found data)
	Log.find({}, (err, foundLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("logs/Index", { logs: foundLog });
		}
	});
};

// ROUTE      GET /logs/new    (new)
const showNewView = (req, res) => {
	// res.send('<form>Create log</form>')
	res.render("logs/New");
};

// ROUTE     POST /logs     (create)
const createNewLog = (req, res) => {
	if (req.body.isShipBroken === "on" || req.body.isShipBroken === true) {
		req.body.isShipBroken = true;
	} else {
		req.body.isShipBroken = false;
	}
	// Create has two arguments:
	//   1st: the data we want to send
	//   2nd: callback function
	Log.create(req.body, (err, createNewLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/logs");
		}
	});
};

// // ROUTE       GET /logs/seed      (seed)
// const seedStarterData = (req, res) => {
// 	// Delete all remaining documents (if there are any)
// 	Log.deleteMany({}, (err, deletedLog) => {
// 		if (err) {
// 			res.status(400).json(err);
// 			console.log(deletedLog);
// 		} else {
// 			// Data has been successfully deleted
// 			// Now use seed data to repopulate the database
// 			Log.create(seed.fruits, (err, createdLog) => {
// 				if (err) {
// 					res.status(400).json(err);
// 				} else {
// 					res.status(200).redirect("/logs");
// 				}
// 			});
// 		}
// 	});
// };

// // // ROUTE       GET /logs/clear      (clear)
// const clearData = (req, res) => {
// 	// Delete all remaining documents (if there are any)
// 	Log.deleteMany({}, (err, deletedLog) => {
// 		if (err) {
// 			res.status(400).json(err);
// 			console.log(deletedLog);
// 		} else {
// 			res.status(200).redirect("/logs");
// 		}
// 	});
// };

// ROUTE     GET /logs/:id     (show)
const showOneLog = (req, res) => {
	// findById accepts two arguments:
	//   1st: the id of the document in our database
	//   2nd: callback (with error object and found document)
	Log.findById(req.params.id, (err, foundLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("logs/Show", { fruit: foundLog });
		}
	});
};

// ROUTE      GET /logs/:id/edit     (edit)
const showEditView = (req, res) => {
	Log.findById(req.params.id, (err, foundLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("logs/Edit", { fruit: foundLog });
		}
	});
};

// ROUTE     PUT /fruits/:id       (update)
const updateOneLog = (req, res) => {
	if (req.body.isShipBroken === "on") {
		req.body.isShipBroken = true;
	} else {
		req.body.isShipBroken = false;
	}

	// findByIdAndUpdate takes 4 arguments:
	//    1st: the id
	//    2nd: new data we want to use to update the old document
	//    3rd (optional): an options object, which looks like this:  { new: true }
	//    4th: callback (with error object and foundLog or updatedFruit)
	Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect(`/logs/${req.params.id}`);
		}
	});
};

// ROUTE       DELETE /fruits/:id      (destroy)
const deleteOneLog = (req, res) => {
	// console.log('in delete route')
	// res.send('Deleting a fruit at index! (in DB)')

	Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/logs");
		}
	});
};

module.exports = {
	findAllLogs,
	showNewView,
	createNewLog,
	// seedStarterData,
	showOneLog,
	showEditView,
	updateOneLog,
	deleteOneLog,
};
