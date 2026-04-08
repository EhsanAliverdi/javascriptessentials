// In this section we will cover Arithmetic Operators in JavaScript.
console.log("-".repeat(60));
console.log('Arithmetic Operators in JavaScript:');
console.log("-".repeat(60));
// Arithmetic operators are used to perform mathematical operations on numbers.
// The basic arithmetic operators include:
// 1. Addition (+): Adds two numbers together. Example: 5 + 3 = 8 
let firstNumber = 5;
let secondNumber = 3;
let sum = firstNumber + secondNumber;
console.log('Addition:', sum);

// 2. Subtraction (-): Subtracts the second number from the first. Example: 5 - 3 = 2
let difference = firstNumber - secondNumber;
console.log('Subtraction:', difference);

// 3. Multiplication (*): Multiplies two numbers. Example: 5 * 3 = 15
let product = firstNumber * secondNumber;
console.log('Multiplication:', product);

// 4. Division (/): Divides the first number by the second. Example: 5 / 3 ≈ 1.6667
let quotient = firstNumber / secondNumber;
console.log('Division:', quotient);

// 5. Modulus (%): Returns the remainder of the division of the first number by the second. Example: 5 % 3 = 2
let remainder = firstNumber % secondNumber;
console.log('Modulus:', remainder);

// 6. Exponentiation (**): Raises the first number to the power of the second. Example: 5 ** 3 = 125
let power = firstNumber ** secondNumber;
console.log('Exponentiation:', power);

// It's important to understand how these operators work and to use them correctly in your code to perform the desired calculations.
// Always be mindful of operator precedence when combining multiple operators in a single expression, as it can affect the outcome of your calculations. 
// You can use parentheses to explicitly define the order of operations and ensure that your code behaves as intended.
let complexExpression = (firstNumber + secondNumber) * (firstNumber - secondNumber);
console.log('Complex Expression:', complexExpression);

// In summary, arithmetic operators are fundamental in JavaScript for performing mathematical operations, 
// and understanding how to use them effectively is essential for writing efficient and accurate code.
    