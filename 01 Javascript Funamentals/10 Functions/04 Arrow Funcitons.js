/*
In this section,
we will learn about arrow functions in JavaScript, which are a more concise syntax for writing function expressions.
Arrow functions were introduced in ES6 and provide a shorter syntax for writing functions. 
They are often used for writing small, anonymous functions, and they also have some differences in behavior compared to regular function expressions, particularly with regard to the `this` keyword.
*/

//The syntax for an arrow function is as follows:
//(parameters) => {
//   // function body
//   return value; // optional
//}

//Here is an example of an arrow function that takes two numbers as parameters and returns their sum:
console.log("-".repeat(20) + 'Arrow Functions' + "-".repeat(20));
let add = (a, b) => {
    return a + b;
};
console.log('Calling the add arrow function with arguments 5 and 3: add(5, 3);');
let result = add(5, 3);
console.log('Result:', result); // Output: Result: 8

//If the function body consists of a single expression, we can omit the curly braces and the return keyword. For example:
let multiply = (a, b) => a * b;
console.log('Calling the multiply arrow function with arguments 4 and 6: multiply(4, 6);');
let product = multiply(4, 6);
console.log('Product:', product); // Output: Product: 24    


