
                                //Changing case

//1. Write a program that takes user input. Convert and show the input in capital letters.

// var str = prompt("Enter letters in lowercase: ");
// console.log(str.toUpperCase());


//2. Write a program that takes user input. Convert and show the input in title case.
  
//   var a = prompt("Enter input");
//   function text(txt){
//       return txt.charAt(0).toUpperCase() + 
//       txt.substr(1).toLowerCase();
//     }; 
//   console.log(text(a)); 


                    //Strings: measuring length and extracting parts

//3. Write a program to take a user input about his favorite mobile phone model. 
//   Find and display the length of user input in your browser.

// var mobName = prompt("Enter your favourite mobile phone model:");
// console.log(mobName.length);


//4. Write a program to display the last character of a user input.

// var a = prompt("Enter a sentence")
// var b = a.length-1;
// console.log(a[b]);


                    //Strings: finding segments

//5. Write a program to find the index of letter “n” in the word “Pakistani” 
//   and display the result in your browser.

// var inp = prompt("Enter Pakistani:");
// var index;
// for(var i=0; i < inp.length; i++)
// {
//     if('n' === inp[i])
//     {
//         index = i;
//     }
// }
// console.log(index);


//6. Write a program to take user input and store username in a
//   variable. If the username contains any special symbol among (@ . ,
//   !), prompt the user to enter a valid username.

// var userName = prompt("Enter user name: ");
// var userAgain;
// for(var i=0; i < userName.length; i++)
// {
//     if(userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
//     {
//         userAgain = prompt("Enter a valid user name without special symbol");
//     }
// }


//7. You have a string “The quick brown fox jumps over the lazy
//   dog”. Write a program to count number of occurrences of word “the”
//   in given string.

// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var text="The quick brown fox jumps over the lazy dog"; 
//  var count=countOccurences(text,"the"); 
//  console.log(count);
  

                //Strings: finding a character at a location

//8. Write a program to find the character at 3rd index in the word
//   “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// console.log(word[2]);


                //Strings: replacing characters

//9. Write a program to replace the “Hyder” to “Islam” in the word
//   “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder","Islam");
// console.log(replacedWord);


//10. Write a program to replace all occurrences of “and” in the string
//    with “&” and display the result in your browser.
//    var message = “Ali and Sami are best friends. They play cricket and
//    football together.”;

// var sentence = "Ali and Sami are best friends. They play cricket and football together.";
// var newSentence = sentence.replace(/and/g, "&");
// console.log(newSentence);


                                    //Rounding Numbers

//11. Write a program that takes a positive integer from user & display
//   the following in your browser.
//   a. number (example number: 3.45214)
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number

// var inp = prompt("Enter a positive integer");
// document.write("Number is: "+ inp+ "<br>");
// document.write("Round of num is: "+ Math.round(inp)+"<br>");
// document.write("Ceil of num is: "+ Math.ceil(inp)+"<br>");
// document.write("Floor value of num is: "+ Math.floor(inp)+"<br>");


//12. Write a program that takes a negative floating point number
//   from user & display the following in your browser.
//   a. Number (example number: -2.678 )
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number

// var inp = prompt("Enter a negative integer");
// document.write("Number is: "+ inp+ "<br>");
// document.write("Round of num is: "+ Math.round(inp)+"<br>");
// document.write("Ceil of num is: "+ Math.ceil(inp)+"<br>");
// document.write("Floor value of num is: "+ Math.floor(inp)+"<br>");


                                //Generating random numbers

//13. Write a program that simulates a dice using random() method of JS
//    Math class. Display the value of dice in your browser

// var dice = [1,2,3,4,5,6];
// var random = Math.random(dice)*6;
// console.log(Math.floor(random));

    
//14. Write a program that simulates a coin toss using random() method
//    of JS Math class. Display the value of coin in your browser.
//    2 = Heads and 1 = Tails

// var toss = [1,2];
// var rand= Math.random(toss)*2;
// var random = Math.round(rand);
// if(random === 2)
// {
//     document.write("Heads");
// }
// else if(random === 1)
// {
//     document.write("Tails");
// }
// else
// {
//     document.write("Try again!!");
// }


//15. Write a program that stores a random secret number from 1 to 10 in a          
//    variable. Ask the user to input a number between 1 and 10. If the user input
//    equals the secret number, congratulate the user.

// var randomNumber = [1,2,3,4,5,6,7,8,9,10];
// var random = Math.random(randomNumber)*10;
// var round = Math.round(random);
// var inp = +prompt("Enter any number between 1 to 10: ");
// if(inp === round)
// {
//     document.write("Congratulations you won!!");
// }
// else 
// {
//     document.write("Better luck next time!");
// }


                        //Converting strings to integers and decimals

// 16. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var age = prompt("Enter your weight");
// var num = parseInt(age);
// document.write(num);

                        //Converting strings to numbers, numbers to strings

//17. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())

// var str = "472";
// var int = +(str);
// document.write(typeof(str)+"<br>");
// document.write(typeof(int));


//18. Write a program that converts the variable num to string.
//    var num = 35.36 ;
//    Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString();
// var newStr = str.replace(".","");
// console.log(newStr);


                            //Controlling the length of decimals

//19. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666

// var percentage = 30 / 45 * 100;
// console.log(percentage.toFixed(2));
