//In this we will talk
// about type conversion in JavaScript, which is the process of converting a value from one data type to another.
console.log("-".repeat(60));
console.log('Type Conversion in JavaScript:');
console.log("-".repeat(60));
console.log("JavaScript is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime.");
console.log("Type conversion can be implicit (automatic) or explicit (manual).");
console.log("implicit type conversion occurs when JavaScript automatically converts a value from one type to another during an operation. For example:");
let result = '5' + 10; 
console.log("Result of '5' + 10:", result); // Output: '510' (string concatenation)
console.log("In this case, the number 10 is implicitly converted to a string and concatenated with '5' to produce '510'.");
console.log("explicit type conversion, also known as type casting, is when you manually convert a value from one type to another using built-in functions. For example:");
let num = Number('42'); 
console.log(typeof num); // Output: 'number'
console.log("Explicitly converting '42' to a number:", num); // Output: 42 (number)
let str = String(123); 
console.log(typeof str); // Output: 'string'
console.log("Explicitly converting 123 to a string:", str); // Output: '123' (string)
let bool = Boolean(0); 
console.log(typeof bool); // Output: 'boolean'
console.log("Explicitly converting 0 to a boolean:", bool); // Output: false (boolean)
console.log("It's important to understand how type conversion works in JavaScript to avoid unexpected results and to write more predictable code.");
console.log("Always be mindful of the types of values you are working with and use explicit type conversion when necessary to ensure your code behaves as intended.");