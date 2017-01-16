//Getting some data
//In it, write a simple node program that will output the latitude and longitude of the International Space Station.
//Practice your google-fu by searching for "iss api" and figuring out the correct URL to use. Hint: there are many options and they are all good :)
//Notice that the values provided by the API are very precise. Round off the values to two decimal digits for a nicer display. Hint: toFixed


var url = "http://api.open-notify.org/iss-now.json";
var request = require("request");

request(url, function(err,response){
    if (err) {
        console.log("Failed !");
        //throw "error2"
    } else {
       	var searchResults = JSON.parse(response.body);
       	var long = parseFloat(searchResults.iss_position.longitude).toFixed(2);
       	var lat = parseFloat(searchResults.iss_position.latitude).toFixed(2);
	    console.log(long,lat); 
	    
    }
});