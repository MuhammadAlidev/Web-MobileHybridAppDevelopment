
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var inp1 = prompt("Enter number one: ");
var inp2 = prompt("Enter number two: ");
var result = inp1 + inp2;
document.write("Sum of "+inp1+" and "+inp2+" is "+result);

//2. Repeat task1 for subtraction, multiplication, division &modulus.

var input1 = prompt("Enter number one: ");
var input2 = prompt("Enter number two: ");
var sub= input1 - input2;
var mul= input1 * input2;
var div= input1 / input2;
var mod= input1 % input2;
document.write("Sub of "+input1+" and "+input2+" is "+sub);
document.write("Mul of "+input1+" and "+input2+" is "+mul);
document.write("Div of "+input1+" and "+input2+" is "+div);
document.write("Mod of "+input1+" and "+input2+" is "+mod);

/* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
Page 1 of 9
MATH EXPRESSIONS | JAVASCRIPT
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value 
by 3. 
l. Output : “The remainder is : 0”. */

var variable;
document.write("Value after variable declaration is: "+variable);
variable= 5;
document.write("Initial value: "+variable);
variable++;
document.write("Value after increment is: "+ variable);
variable = variable + 7;
document.write("Value after addition is: "+ variable);
variable--;
document.write("Value after decrement is: "+ variable);
variable = variable % 3;
document.write("The remainder is: "+ variable);

/* 4. Cost of one movie ticket is 600 PKR. Write a script to 
store
ticket price in a variable & calculate the cost of buying 5 
tickets
to a movie. */

var ticket = 600;
document.write("Cost of 5 tickets are: "+ticket*5);

//5. Write a script to display multiplication table of any number in your browser.

document.write("<h1>Table of 4</h1>");
for(vari=1; i<=10; i++)
{
    document.write("4 * "+ i + "= "+4*i +"<br>");
}

//6. The Temperature Converter: It’s hot out! Let’s make a 
//converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = prompt("Enter Celsius temperature: ");
var fehrenheit = celsius + 32;
document.write("Celsius to Fehrenheit is: "+ fehrenheit);
celsius = fehrenheit - 32;
document.write("Fehrenheit to Celsius is: "+ celsius);

/*7. Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables
Page 4 of 9
MATH EXPRESSIONS | JAVASCRIPT
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/

var p1 = 40;
var p2 = 50;
var q1 = 10;
var q2 = 20;
var char = 250;
document.write("Total price of item one is: "+p1*q1+"<br>");
document.write("Total price of item two is: "+p2*q2);
document.write("Your bill is: "+p1*q1+p2*q2);

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totalMarks = prompt("Enter total marks: ");
var obtainMarks = prompt("Enter obtain marks");
var perecent = (obtainMarks/totalMarks)*5;

/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee) */

var dollar = 10;
var riyal = 25;
var Pkr = 104.80 * dollar + 28 * riyal;
document.write("Total Currency in Pkr is: "+ Pkr);

/*10. Write a program to initialize a variable with some 
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */

var a = 5;
a = a+5*10/2;
document.writeln(a);

/* 11. The Age Calculator: Forgot how old someone is? 
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored 
values. */

var cY = prompt("Enter current year:");
var bY = prompt("Enter birth year:");
var age = cY - bY;
console.log("Your age is"+ age);

/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */

var radius = prompt("Enter radius");
var circumference = 2 (3.142)(radius);
var area = (3.142)(radius*radius);
document.write("Radius of a circle is: "+ radius + "<br>");
document.write("The circumference is: "+ circumference + "<br>");
document.write("The area is: "+ area);

/*13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is? 
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.*/

var favSnack = prompt("Enter your favourite snack");
var currentAge = prompt("Enter your current age");
var maxAge = prompt("Enter maximum age");
var estAmount = prompt("Enter estimate amount intake per day");

document.writeln("Favourite Snack: "+ favSnack+ "<br>");
document.writeln("Current age: "+ currentAge + "<br>");
document.writeln("Estimated maximum age: "+ maxAge + "<br>");
document.writeln("Amount of snacks per day: "+ estAmount + "<br>");
document.writeln("You will need "+ (maxAge-currentAge)*estAmount + " "+ favSnack+"s" +" to last you until the ripe old age of "+ maxAge);








































