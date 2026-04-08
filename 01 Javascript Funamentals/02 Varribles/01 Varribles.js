// this section covers variables in JavaScript, which are used to store data values. In JavaScript, you can declare variables using `var`, `let`, or `const`.
// `var` is the oldest way to declare variables and has function scope, while `let` and `const` were introduced in ES6 and have block scope.
// `let` allows you to declare variables that can be reassigned, while `const` is used for variables that cannot be reassigned after their initial assignment.

console.log('Variables in JavaScript:');

// Using var
var name = 'Alice';
console.log('Using var:', name);

// Using let
let age = 25;
console.log('Using let:', age);

// Using const
const country = 'USA';
console.log('Using const:', country);  
// You can reassign variables declared with var and let
var firstname = 'Alice';
firstname = 'Bob';
age = 30;
console.log('Reassigned var:', firstname);
console.log('Reassigned let:', age);
// You cannot reassign a variable declared with const
// country = 'Canada'; // This will throw an error  

// It's important to choose the appropriate variable declaration based on the use case. Use `const` by default, 
// and only use `let` if you need to reassign the variable. Avoid using `var` to prevent potential issues with variable hoisting and scope.
// Always use meaningful variable names to improve code readability and maintainability.
// best practices for naming variables include using camelCase, starting with a letter, and avoiding reserved keywords.
// Example of best practices for variable naming
let userName = 'Alice';
const maxLoginAttempts = 5;
var isLoggedIn = false;
console.log('Best practices for variable naming:', userName, maxLoginAttempts, isLoggedIn);

// In summary, understanding how to declare and use variables is fundamental in JavaScript programming.
// always use the correct variable declaration (`var`, `let`, or `const`) based on the needs of your code, 
// and follow best practices for naming variables to write clean and maintainable code.
let message  = 'Calculating the area of a circle';
const pi = 3.14159;
let radius = 5;
let area = pi * radius * radius;
console.log(message);
console.log('The area of the circle is:', area);