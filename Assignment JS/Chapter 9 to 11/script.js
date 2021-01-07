/*1. Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights”

var cityName = prompt("Enter city name:");
if(cityName === "Karachi")
{
    document.write("Welcome to the city of lights");
}
*/

/*2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender:");
if(gender === "male")
{
    document.write("<h2>Good Morning Sir</h2>");
}
else if(gender === "female")
{
    document.write("<h2>Good Morning Ma'am</h2>");
}
*/

/*3. Write a program to take input color of road traffic signal 
from the user & show the message according to this table:

var color = prompt("Enter color of traffic signal:");
if(color == "Red")
{
    document.write("<h3>Must Stop</h3>");
}
else if(color == "Yellow")
{
    document.write("<h3>Ready to move</h3>");
}
else if(color == "Green")
{
    document.write("<h3>Move now</h3>");
}
*/

/*4. Write a program to take input remaining fuel in car (in 
litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car”

var remFuel = parseInt(prompt("Enter remaining fuel in car:"));
if(remFuel < 0.25)
{
    document.write("<h2>Please refill the fuel in your car</h2>");
}
*/

/*5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.

a) var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
Answer: true

b) var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
Answer: false

c) var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
Answer: condition 2 is true

d) var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
Answer: The cost equals

e) if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
Answer: True

f) if("car" < "cat"){
    alert("car is smaller than cat");
    }
Answer: car is smaller than cat
*/

/*6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute 
grade as per table:
Show the total marks, marks obtained, percentage, grade &
remarks like:

var sub1,sub2,sub3;
sub1 = parseInt(prompt("Enter the marks of Subject# 1"));
sub2 = parseInt(prompt("Enter the marks of Subject# 2"));
sub3 = parseInt(prompt("Enter the marks of Subject# 3"));
var totalMarks = 300;
var obtMarks = sub1 + sub2 + sub3;
var percent = parseFloat((obtMarks/totalMarks)*100);
var grade,remarks; 
if(percent >= 80)
{
    grade = "A-one";
    remarks = "Excellent";
}
else if(percent >= 70)
{
    grade = 'A';
    remarks = "Your result is good"
}
else if(percent >= 60)
{
    grade = 'B';
    remarks = "You need to improve";
}
else
{
    grade = "Fail";
    remarks = "Very poor, you need much much improvement";
}
document.write("<h1>MarkSheet</h1><br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtain Marks: " + obtMarks + "<br>");
document.write("Percentage: " + percent + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");
*/

/*7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.

var secretNumber = 7;
var inp = parseInt(prompt("Enter any number from 1 to 10:"));
if(inp == secretNumber)
{
    document.write("Bingo! Correct answer");
}
if(inp == secretNumber+1)
{
    document.write("Close enough to the correct answer");
}
*/

/*8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number 
is divisible by 3.

var inp = prompt("Enter a number:");
if(inp % 3 === 0)
{
    document.writeln("Number is divisible by 3");
}
else
{
    document.writeln("Number isn't divisible by 3");
}
*/

/*9. Write a program that checks whether the given input is an
even number or an odd number.

var inp = prompt("Enter a number");
if(inp % 2 == 0)
{
    document.write("Given number is Even");
}
else
{
    document.write("Given number is Odd");
}
*/

/*10. Write a program that takes temperature as input and 
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = parseInt(prompt("Enter temperature:"));
if(temp > 40)
{
    document.write("It is too hot outside.");
}
else if(temp > 30)
{
    document.write("The Weather today is Normal.");
}
else if(temp > 20)
{
    document.write("Today’s Weather is cool.");
}
else if(temp > 10)
{
    document.write("OMG! Today’s weather is so Cool.");
}
*/

/*11. Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.

var inp1 = parseInt(prompt("Enter number 1:"));
var inp2 = parseInt(prompt("Enter number 2:"));
var op = prompt("Enter operator:");
if(op == '+')
{
    document.write("Answer of Addition is: "+ inp1+inp2);
}
else if(op == '-')
{
    document.write("Answer of Subtraction is: "+ inp1-inp2);
}
else if(op == '*')
{
    document.write("Answer of Multiplication is: "+ inp1*inp2);
}
else if(op == '/')
{
    document.write("Answer of Division is: "+ inp1/inp2);
}
else 
{
    document.write("Enter a correct operator");
}
*/











