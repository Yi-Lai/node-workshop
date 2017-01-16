//Add an instruction to your program that will output "Hello World Again!!" 10 seconds after the program was run.

console.log('start of program');
setTimeout(function(){
	console.log("Hello World Again!");
},10000);

//If you never tried setInterval, give it a try first. It works the same way as setTimeout, takes a callback function and a time in milliseconds. But instead of calling your callback once, it calls it once every x milliseconds. In this exercise, you'll have to mimic what setInterval is doing but only with setTimeout!
function printing() {
    console.log("Hello World!")
    setTimeout(printing, 10000)};
    printing();


