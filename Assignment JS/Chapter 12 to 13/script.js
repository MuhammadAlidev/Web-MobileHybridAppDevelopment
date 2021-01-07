
/*1.Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).

var inp = prompt("Enter a Character:");
var input = parseInt(inp);
if(input >= 65 || input <= 90)
{
    document.write("It's a Uppercase letter");
}
else if(inp >= 97 || inp <= 122)
{
    document.write("It's a Lowercase letter");
}
*/

/*2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.

var inp1,inp2;
inp1 = prompt("Enter number one:");
inp2 = prompt("Enter number two:");
if(inp1 === inp2)
{
    document.write("Numbers are equal");
}
else if(inp1 > inp2)
{
    document.write("Number one is greater than Number two");
}
else if(inp2 > inp1)
{
    document.write("Number two is greater than Number one");
}
*/

/*3. Write a program that takes input a number from user & 
state whether the number is positive, negative or zero.

var inp = prompt("Enter a number:");
if(inp == 0)
{
    document.write("Given number is zero");
}
if(inp > 0)
{
    document.write("Given number is positive");
}
if(inp < 0)
{
    document.write("Given number is negative");
}
*/

/*4. Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise

var text = prompt("Enter a vowel");
var vowels = (['A', 'E', 'I', 'O', 'U','a', 'e', 'i', 'o', 'u']);
var check = false;
for (var i = 0; i <= vowels.length; i++)
{
    if (text == vowels[i]) 
    {
        check = true;
    }
}
if(check)
{
    document.write("<h2>Given alphabet is vowell</h2>");
}
else
{
    document.write("<h2>Given alphabet isn't vowell</h2>");
}
*/

/*5. . Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then 
give message “ Please enter your password”
ii. Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise.

var password = "abc";
var entpass = prompt("Enter your password");
if(entpass === password)
{
    document.write("<h2>Correct!</h2>")
}
else if(entpass != password)
{
    document.write("<h2>Incorrect!</h2>")
}
else if(entpass === "")
{
    document.write("<h2>Please enter a password</h2>")
}
*/

/*6. . This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}

var greeting;
var hour = prompt("Enter current hour");
if (hour < 18) 
{
    greeting = "Good day";
    document.write(greeting);
}
else
{
    greeting = "Good evening";
    document.write(greeting);
}
*/

/*7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements

var time = prompt("Enter current time");
if(time >= 0000 && time < 1200)
{
    document.write("Good Morning!");
}
else if(time >= 1200 && time < 1700)
{
    document.write("Good Afternoon!");
}
else if(time >= 1700 && time < 2100)
{
    document.write("Good Evening!");
}
else if(time >= 2100 && time < 2359)
{
    document.write("Good Night!");
}
*/














