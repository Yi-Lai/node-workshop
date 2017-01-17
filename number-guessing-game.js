// In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!
// Instead of using prompt and alert, you will have to use capabilities from NodeJS and any external module. 
//Generate a random number between 1 and 100. Ask the user to guess the number. You should give them 4 tries to guess the number. If they guess wrong, tell them if it's higher or lower. If they guess right, congratulate them. Otherwise, give them a message saying what the correct number was, as well as their list of guesses.
var target = Math.floor(Math.random() * 100);
var prompt = require("prompt");
var c;

function game(c) { 
	if (c === 0) {
		console.log("game over!")
	}
	else {
		prompt.get(["Choose a random number"], function(err, res) {
			var actualnumber = parseInt(res['Choose a random number']);
			if (typeof actualnumber !== "number") {
				console.log("This is not a number");
			}
			else {

				if (actualnumber == target) {
					console.log("win!")
				}
				else {
					if (actualnumber > target) {
						console.log("high")
					}
					else {
						console.log("low")
					}
				game(c-1);
				}
			}
		});
	}
}

game(4);
