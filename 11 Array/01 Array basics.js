/*
In this seciton,
we will learn about arrays in JavaScript, which are a special type of object used to store ordered collections of values. 
Arrays can hold values of any type, including numbers, strings, objects, and even other arrays. 
The syntax for creating an array is as follows:
let arrayName = [element1, element2, element3, ...];
*/

//Creating an array using array literal syntax
console.log("-".repeat(20) + 'Creating Arrays' + "-".repeat(20));
let fruits = ['apple', 'banana', 'orange'];
console.log('Fruits Array:', fruits); 

//We can also create an array using the Array constructor
console.log('Creating an array using the Array constructor: let numbers = new Array(1, 2, 3);');
let numbers = new Array(1, 2, 3);
console.log('Numbers Array:', numbers);



//Accessing elements in the array using index
//Array indices start at 0, so the first element is at index 0, the second element is at index 1, and so on.
console.log('First fruit:', fruits[0]);
console.log('Second fruit:', fruits[1]);
console.log('Third fruit:', fruits[2]);



