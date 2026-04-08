//In this part, we will cover the Data Types in JavaScript. 
//JavaScript has several built-in data types that can be categorized into two main groups: primitive types and reference types.
console.log("-".repeat(60));
console.log('Data Types in JavaScript:');
console.log("We have two main categories of data types in JavaScript: primitive types and reference types.");
console.log("-".repeat(60));
//Primitive types include:
//1. String: Represents a sequence of characters. Example: 'Hello, World!'
//2. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
//3. Boolean: Represents a logical entity that can have two values: true or false. Example: true, false
//4. Null: Represents the intentional absence of any object value. Example: null
//5. Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
console.log("-".repeat(20) +'Primitive Types'+ "-".repeat(20));
console.log("Primitive types include: String, Number, Boolean, Null, and Undefined.");
//Strings can be defined using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
console.log('Strings in JavaScript:');
let greeting = 'Hello, World!';
let firstName = "Alice";
let message = `Welcome, ${firstName}!`;
console.log(message); // Output: Welcome, Alice!
console.log("-".repeat(20));
//Numbers can be used for mathematical operations and can be integers or floating-point values.
console.log('Numbers in JavaScript:');
let age = 30; // Integer
const pi = 3.14159;
console.log('Age:', age);
console.log('Pi:', pi);
console.log("-".repeat(20));
//Booleans are often used in conditional statements to control the flow of the program.
console.log('Booleans in JavaScript:');
let isLoggedIn = true;

console.log('User is logged in.');

console.log("-".repeat(20));

//Null and undefined are used to represent the absence of a value. Null is an intentional assignment of no value, while undefined indicates that a variable has been declared but not assigned a value.
console.log('Null and Undefined in JavaScript:');
let user = null;
let address;
console.log('User:', user);
console.log('Address:', address);

//----------------------------------------------------------------------------------------------------------------------------
//Reference types include:
console.log("-".repeat(20) +'Reference Types'+ "-".repeat(20));
console.log("Reference types include: Object, Array, and Function.");
//1. Object: Represents a collection of properties and methods. Example: { name: 'Alice', age: 30 }
//2. Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
//3. Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log('Hello!'); }
