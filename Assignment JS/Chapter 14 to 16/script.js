
/*1. Declare an empty array using JS literal notation to store
student names in future.

var fruits = ["Orange", "Apple", "Banana", "Mango"];
*/

/*2. Declare an empty array using JS object notation to store
student names in future

var array = new Array();
*/

/*3. Declare and initialize a strings array

var inp = ["abc","def","ghi"];
console.log(inp);
*/

/*4. Declare and initialize a numbers array.

var inp = [1,23,45,67];
console.log(inp);
*/

/*5. Declare and initialize a boolean array.

var inp = [true, false];
console.log(inp);
*/

/*6. Declare and initialize a mixed array.

var inp = [true, 2,43,"jhfgd",'s'];
console.log(inp);
*/

/*7. Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like:

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phill", "PhD"];
document.write("<h1>Qualifications</h1>");
for(var i = 0; i < qualifications.length; i++)
{
    document.write((i+1) + ": "+ qualifications[i]+ "<br>");
}
*/

/*8. Write a program to store 3 student names in an array.Take
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like:

var std = [2];
var score = [2]
var total = 500;
var percent = [2];
std[0] = prompt("Enter the name of first student");
std[1] = prompt("Enter the name of second student");
std[2] = prompt("Enter the name of third student");
score[0] = prompt("Enter the marks of first student");
score[1] = prompt("Enter the marks of second student");
score[2] = prompt("Enter the marks of third student");
for(var i = 0; i < std.length; i++)
{
    percent[i] = (score[i]/total)*100;
}
for(var j = 0; j < std.length; j++)
{
    document.write("Score of " + std[j] + " is "+ score[j] + " and his percentage is "+ percent[j] + "%" + "<br>");
}
*/

/*9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser.
c. Add two more color to the beginning of the array. 
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.

var color = ["red", "green", "blue"];
var end = prompt("Enter the color you want to add at end");
color.push(end);
for(var i = 0; i < color.length; i++)
{
    document.write(color[i] + "<br>");
}

document.write("<br>");
var front1,front2;
front1= prompt("Enter the color one you want to add at front");
front2= prompt("Enter the color two you want to add at front");
color.unshift(front1, front2);
for(var j = 0; j < color.length; j++)
{
    document.write(color[j] + "<br>");
}
document.write("<br>");

color.pop();
for(var k = 0; k < color.length; k++)
{
    document.write(color[k] + "<br>");
}
document.write("<br>");

*/

/*10. Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort 
method.

var arr = [4];
arr[0] = prompt("Enter value 1 to store in an Array");
arr[1] = prompt("Enter value 2 to store in an Array");
arr[2] = prompt("Enter value 3 to store in an Array");
arr[3] = prompt("Enter value 4 to store in an Array");
document.write("Score of Students: ");
for(var i = 0; i < arr.length; i++)
{
    document.write(arr[i]);   
    if(i != 3)
    {
        document.write(",");
    }
}
arr = arr.sort();
document.write("<br>Sorted score of Students: ");
for(var j = 0; j < arr.length; j++)
{
    document.write(arr[j]);   
    if(j != 3)
    {
        document.write(",");
    }
}
*/

/*11. Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array.
*/


/*12. Write a program to create a single string from the 
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
document.write(arr.join(" "));
*/

/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out)

var arr = ["abc", "def", "ghi"];
arr.unshift("yoo");
document.write(arr+ "<br>");
arr.shift();
document.write(arr);
*/

/*14. . Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In First Out)

var arr = ["abc", "def", "ghi"];
arr.push("yoo");
document.write(arr+ "<br>");
arr.shift();
document.write(arr);
*/

/*15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array. 
Display the following dropdown/select menu in your 
browser using document.write() method:

var manufacturers;
document.write("<select>");
document.write("<option>"+ "Apple" +"</option>");
document.write("<option>"+ "Samsung" +"</option>");
document.write("<option>"+ "Motorola" +"</option>");
document.write("<option>"+ "Nokia" +"</option>");
document.write("<option>"+ "Sony" +"</option>");
document.write("<option>"+ "Haier" +"</option>");
document.write("</select>");
*/
