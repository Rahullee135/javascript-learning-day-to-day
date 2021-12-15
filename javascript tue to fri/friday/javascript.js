// PROPERTY ACCESS ON STRING 

var hi = "hello world";
console.log(hi.charAt(0));
//ES5 property allows on string
console.log(hi[0])


//ArrayisArray()

fruits =  ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));


//Array.ForEach()


var numbers = [45,12,13,15,142];
var txt = "";

numbers.forEach(myFunction)

function myFunction (value) {
	txt += value + "<br>";
}

console.log(txt)

//Array.map()

var numbers1 = [54,42,56,89,100];
var numbers2 = numbers1.map(myFunction1)

function myFunction1(value) {
	// body...
   return value*2
}

console.log(numbers2)



////////////////---------------////////////////////////////


//JSON.parse() 
//The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:

//JSON.stringify()
//Use the JavaScript function JSON.stringify() to convert it into a string.


//Date.now()
//Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).


//new Date()
//it will display current date and day time etc ..


//Date.toISOString()
//The toISOString() method converts a Date object to a string, using the ISO standard format:


//Date.toJSON()
//Date.toJSON() converts a Date object into a string, formatted as a JSON date.
//JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ:


//JavaScript let
//The let keyword allows you to declare a variable with block scope.
// output will be taken from 1st decalre variable not from the block scope


//JavaScript var
//The var keyword allows you to declare a variable  not the  block scope.
// output will be take from 2nd i mean the block of scope 







