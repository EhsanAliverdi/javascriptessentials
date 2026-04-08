/*
In this section,
we will learn about function expressions in JavaScript, which are a way to define functions as part of an expression. 
Function expressions can be anonymous (without a name) or named, and they can be assigned to variables, passed as arguments to other functions, or returned from functions.
*/

//A function expression is created by assigning a function to a variable. For example:
console.log("-".repeat(20) + 'Function Expressions' + "-".repeat(20));
function add(a, b) {
 return a*b;
}
let sum = add;
console.log('Calling the add function expression with arguments 4 and 6: add(4, 6);');
let product = sum(4, 6);
console.log('Product:', product); // Output: Product: 24

//Function expressions can also be anonymous, meaning they do not have a name. For example:
let divide = function(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
};
console.log('Calling the divide function expression with arguments 10 and 2: divide(10, 2);');
let quotient = divide(10, 2);
console.log('Quotient:', quotient); // Output: Quotient: 5  