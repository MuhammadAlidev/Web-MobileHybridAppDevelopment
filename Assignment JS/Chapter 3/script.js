
//1. Declare a variable called age & assign to it your age. Showyour age in an alert box.

var age = 22;
alert(age);

//2. Declare & initialize a variable to keep track of how many
//times a visitor has visited a web page. Show his/her
//number of visits on your web page. For example: “You
//have visited this site N times”.

var time = prompt("Enter how many times you have visited us");
alert("You have visited this site "+time+" times");

//3.Declare a variable called birthYear & assign to it your
//birth year. Show the following message in your browser:

var birthYear = 1998;
document.write(birthYear);

//4. A visitor visits an online clothing store
//www.xyzClothing.com . Write a script to store in variables
//the following information:
//a. Visitor’s name
//b. Product title
//c. Quantity i.e. how many products a visitor wants to
//order
//Show the following message in your browser: “John
//Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(visitorName + " ordered "+quantity+ " "+ productTitle);