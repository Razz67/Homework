const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
	res.send(
		`99 little bugs in the code, <a href="/98">Take one down and patch it around</a>`
	);
});

app.get("/:number_of_bugs", function (req, res) {
	let number = Number(req.params.number_of_bugs);
    if(number % 5 === 0) {
        number = Math.floor(Math.random(number) * 100);
        res.send(
            `${number} little bugs in the code, <a href="/${
                number}">Take one down and patch it around</a>`
        );
    }  
	else if (number === 1) {
		res.send(
			`${number} bug in the code, <a href="/${
				number - 1}">Take one down and patch it around</a>`);
	} else if (number > 1) {
		res.send(
			`${number} little bugs in the code, <a href="/${
				number - 1
			}">Take one down and patch it around</a>`
		);
	}   
    else {
		res.send("No more bugs in the code");
	}
});

app.listen(port, function (err) {
	if (err) console.log(err);
	console.log("Server listening on port", port);
});
