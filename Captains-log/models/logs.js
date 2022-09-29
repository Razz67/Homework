// Load Mongoose
const mongoose = require("mongoose");

// Add shortcut to Schema
const Schema = mongoose.Schema;

// Create Schema
const logsSchema = new Schema({
	title: { type: String, required: true },
	entry: { type: String, required: true },
    isShipBroken: { type: Boolean, required: true },
    created: { type: Date, default: Date.now, timestamps: true },
});

// Create a Model from our Schema
const Logs = mongoose.model("Logs", logsSchema);

// Export our Model
module.exports = Logs;
