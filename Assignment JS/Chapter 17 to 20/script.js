
/*1. Declare and initialize an empty multidimensional array.
(Array of arrays)

var array = [[2,3,5,6],[6,8,23,87]];
*/

/*2. Declare and initialize a multidimensional array 
representing the following matrix:

var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i = 0; i < arr.length; i++) 
{ 
    for (var j = 0; j < arr[i].length; j++) 
    { 
        document.write(arr[i][j]);
    }
    document.write("<br>")
}
*/

/*3. Write a program to print numeric counting from 1 to 10.

for(var i = 1; i < 11; i++)
{
    document.write(i+"<br>");
}
*/

/*4. Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user.

var num = prompt("Enter a number to show it's multiplication table:");
var len = prompt("Enter length of number to print table:");
for(var i = 1; i <= len; i++)
{
    document.write(num + " * "+ i + " = "+ num*i + "<br>");
}
*/

/*5. Write a program to print items of the following array 
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”, 
“strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(var i = 0; i < fruits.length; i++)
{
    document.write(fruits[i]+"<br>");
}
document.write("<br>");
for(var j = 0; j < fruits.length; j++)
{
    document.write("Element at index "+ j+" is "+fruits[j]+".<br>");
}
*/

/*6. Generate the following series in your browser. See 
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("Counting: ");
for(var i = 1; i <=15; i++)
{
    document.write(i);
    if(i != 15)
    {
        document.write(", ");
    }
}
document.write("<br>");

document.write("Reverse Counting: ");
for(var i = 10; i >=1; i--)
{
    document.write(i);
    if(i != 1)
    {
        document.write(", ");
    }
}
document.write("<br>");

document.write("Even: ");
for(var i = 1; i <=20; i++)
{
    if(i%2 == 0)
    {
        document.write(i);
        if(i != 20)
        {
            document.write(", ");
        }
    }
}
document.write("<br>");

document.write("Odd: ");
for(var i = 1; i <=20; i++)
{
    if(i%2 == 1)
    {
        document.write(i);
        if(i != 19)
        {
            document.write(", ");
        }
    }
}
document.write("<br>");

document.write("Series: ");
for(var i = 1; i <=20; i++)
{
    if(i%2 == 0)
    {
        document.write(i+"k");
        if(i != 20)
        {
            document.write(", ");
        }
    }
}
document.write("<br>");
*/

/*7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var inp = prompt("Search:");
var check = false;
for(var i = 0; i < A.length; i++)
{
    if(inp === A[i])
    {
        check = true;
    }
}
if(check)
{
    document.write("Item found");
}
else
{
    document.write("Item not found");
}
*/

/*8. Write a program to identify the largest number in the 
given array.
A = [24, 53, 78, 91, 12].

var array = [24, 53, 78, 91, 12];
var largest= 0;
for (i=0; i < array.length;i++){
    if (array[i] > largest) {
         largest = array[i];
    }
}
document.write(largest);
*/

/*9. Write a program to identify the smallest number in the 
given array.
A = [24, 53, 78, 91, 12]

var array = [24, 53, 78, 91, 12];
var smallest= 0;
for (i=0; i < array.length;i++){
    if (array[i] < smallest) {
         smallest = array[i];
    }
}
document.write(smallest);
*/

/*10. Write a program to print multiples of 5 ranging 1 to 
100.

for(var i = 5; i <=100; i+=5)
{
    document.write(i+ "<br>");
}
*/




