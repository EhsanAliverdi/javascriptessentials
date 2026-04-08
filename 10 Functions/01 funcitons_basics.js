/* 
 * In this section,
 * we will learn about functions in JavaScript, including how to define, call, and use them.
 */


//Functions are reusable blocks of code that perform a specific task. They can take input in the form of parameters and can return a value. Functions are fundamental building blocks in JavaScript and are used to organize and structure code.
//We can define a function using the function keyword, followed by the name of the function, parentheses for parameters, and curly braces for the function body.
//Here is the syntax for defining a function:
//function functionName(parameters) {
//   // function body
//return value; // optional
//}
// functions can be called by using their name followed by parentheses, and passing any required arguments. For example, if we have a function named greet, we can call it like this: greet
//funtion can be ceated without parameters and without return value, for example:
function greet() {
    console.log('Hello, World!');
}
greet(); // Output: Hello, World!
//example we will createfunction that takes two numbers as parameters and returns their sum:
console.log("-".repeat(20) + 'Defining and Calling Functions' + "-".repeat(20));

function add(a, b) {
    return a + b;
}



console.log('Calling the add function with arguments 5 and 3: add(5, 3);');
let result = add(5, 3);
console.log('Result:', result); // Output: Result: 8    


//functions parameters can also have default values, which are used when no argument is provided for that parameter. For example:
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
console.log('Calling the greet function without arguments: greet();');
greet(); // Output: Hello, Guest!

