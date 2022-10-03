const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
	title: { type: String, required: true },
	entry: {  type: String, required: true},
	shipIsBroken: { type: Boolean, default: true },
});
{Timestamp: true}

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
