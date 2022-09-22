const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
	// start with 99 bugs and add a link to the next page to change the number each time the link is clicked
	res.send(
		`99 bottles of beer on the wall, <a href="/98">Take one down and pass it around</a>`
	);
});

app.get("/:number_of_bottles", function (req, res) {
	let number = Number(req.params.number_of_bottles);

	// if number == 1 change bottles to bottle
	if (number === 1) {
		res.send(
			`${number} bottle of beer on the wall, <a href="/${
				number - 1
			}">Take one down and pass it around</a>`
		);

		// if number is between 2 and 99 bottles = bottles
	} else if (number > 1) {
		res.send(
			`${number} bottles of beer on the wall, <a href="/${
				number - 1
			}">Take one down and pass it around</a>`
		);

		// retun no more bottles
	} else {
		res.send("No more bottles of beer on the wall");
	}
});

app.listen(port, function (err) {
	if (err) console.log(err);
	console.log("Server listening on port", port);
});
