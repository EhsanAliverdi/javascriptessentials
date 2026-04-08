//In this section, we will learn about template literals in JavaScript, which are a powerful way to work with strings. 
//Template literals allow us to create multi-line strings and embed expressions within strings using a more readable syntax.
// Template literals are enclosed by backticks (` `) instead of single or double quotes.
// To create a template literal, simply use backticks instead of quotes:
let firstName = 'Alice';
let greeting = `Hello, ${firstName}!`;
console.log(greeting); // Output: Hello, Alice!
// Template literals can also span multiple lines without the need for concatenation:
let multiLineString = `This is a multi-line string.
It can span multiple lines without the need for concatenation.`;
console.log(multiLineString);
// You can also include expressions inside template literals using the ${} syntax:
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.
// Template literals provide a more convenient and readable way to work with strings, especially when you need to include variables or expressions within your strings. 
// They are widely used in modern JavaScript development for creating dynamic and complex string outputs.
