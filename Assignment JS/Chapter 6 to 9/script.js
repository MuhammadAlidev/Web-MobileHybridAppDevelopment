/*1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: 

var a = prompt("Enter a number: ");
document.writeln("Result:<br>");
document.writeln("The value of a is: "+ a + "<br>");
document.writeln("................................................<br>");
document.writeln("The value of ++a is: "+ ++a + "<br>");
document.writeln("Now the value of a is: "+ a +"<br><br>");
document.writeln("The value of a++ is: "+ a++ +"<br>");
document.writeln("Now the value of a is: "+ a +"<br><br>");
document.writeln("The value of --a is: "+ --a + "<br>");
document.writeln("Now the value of a is: "+ a +"<br><br>");
document.writeln("The value of a-- is: "+ a-- +"<br>");
document.writeln("Now the value of a is: "+ a +"<br><br>");
*/

/*2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; 

var a = 2, b = 1;
--a;
--a - --b;
--a - --b + ++b;
var result = --a - --b + ++b + b--;
document.writeln("The value of a is: " + a + "<br>");
document.writeln("The value of b is: " + b + "<br>");
document.writeln("The result is: " + result + "<br><br>");
*/

/*3. Write a program that takes input a name from user & 
greet the user. 

var user = prompt("Enter your name: ");
document.writeln("Welcome " + user + "<br><br>");
*/

/*4. Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default. 

var num = prompt("Enter number");
if(isNaN(num)){
    for(var i = 1; i <= 10 ;i++){
        document.write(5+ " * "+ i +" = "+ 5*i +"<br>");
    }
}
else{
    for(var i = 1; i <= 10 ;i++){
        document.write(num+ " * "+ i +" = "+ num*i +"<br>");
    }
}
*/

/*5. Take
a) Take three subjects name from user and store them in 3 
different variables.
b) Total marks for each subject is 100, store it in another 
variable.
c) Take obtained marks for first subject from user and 
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables.
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table) */

var english = parseInt(prompt("Enter the marks of English"));
var urdu = parseInt(prompt("Enter the marks of Urdu"));
var islamiat = parseInt(prompt("Enter the marks of Islamiat"));
var obtainMarks = english + urdu + islamiat;
var Marks = 100;
var totalMarks = 300;
var percent = (obtainMarks/totalMarks) * 100;

document.write("<table border=2>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Obtain Marks</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>English</td>");
document.write("<td>"+ english +"</td>");
document.write("<td>"+ Marks +"</td>");
document.write("<td>"+ english + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Urdu</td>");
document.write("<td>"+ urdu +"</td>");
document.write("<td>"+ Marks +"</td>");
document.write("<td>"+ urdu + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Islamiat</td>");
document.write("<td>"+ islamiat +"</td>");
document.write("<td>"+ Marks +"</td>");
document.write("<td>"+ islamiat + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td></td>");
document.write("<td>"+ obtainMarks +"</td>");
document.write("<td>"+ totalMarks +"</td>");
document.write("<td>"+ percent + "%" +"</td>");
document.write("</tr>");

document.write("</table>");






