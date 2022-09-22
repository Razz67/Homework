const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
	// start with 99 bugs and add a link to the next page to change the number each time the link is clicked
	res.send(`99 little bugs in the code, <a href="/98">Take one down and patch it around</a>`);
});

app.get("/:number_of_bugs", function (req, res) {
	let number = Number(req.params.number_of_bugs);
	// if number is divisible by 5 === 0 return a random number between 0 and 100
	if (number % 5 === 0) {
		number = Math.floor(Math.random(number) * 100);
		res.send(
			`${number} little bugs in the code, <a href="/${number}">Take one down and patch it around</a>`
		);
		// if number == 1 change bugs to bug
	} else if (number === 1) {
		res.send(
			`${number} bug in the code, <a href="/${
				number - 1
			}">Take one down and patch it around</a>`
		);
		// if number is between 2 and 99 bugs = bugs
	} else if (number > 1) {
		res.send(
			`${number} little bugs in the code, <a href="/${
				number - 1
			}">Take one down and patch it around</a>`
		);
		// retun no more bugs
	} else {
		res.send("No more bugs in the code");
	}
});

app.listen(port, function (err) {
	if (err) console.log(err);
	console.log("Server listening on port", port);
});
