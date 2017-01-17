// In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!
// Instead of using prompt and alert, you will have to use capabilities from NodeJS and any external module. 
//Generate a random number between 1 and 100. Ask the user to guess the number. You should give them 4 tries to guess the number. If they guess wrong, tell them if it's higher or lower. If they guess right, congratulate them. Otherwise, give them a message saying what the correct number was, as well as their list of guesses.

var prompt = require("prompt");

prompt.get(["Choose a random number"]),function(answer,result){
	if(answer === 5){
		console.log('something bad');
	}else{3

		//log the result

		console.log('Command-line input received')
		console.log(" username: " + result.username)
		console.log(" email: " + result.email)
	}
});