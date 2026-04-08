//In this section we will cover Relational Operators in JavaScript.
console.log("-".repeat(60));
console.log('Relational Operators in JavaScript:');
console.log("-".repeat(60));
// Relational operators are used to compare two values and return a boolean result (true or false) based on the comparison.
// The basic relational operators include:
// 1. Greater than (>): Returns true if the left operand is greater than the right operand. Example: 5 > 3 = true
let a = 5;
let b = 3;
console.log('a:', a);
console.log('b:', b);
console.log( "Greater than (>) a > b:", a > b);

// 2. Less than (<): Returns true if the left operand is less than the right operand. Example: 5 < 3 = false
console.log("Less than (<) a < b:", a < b);

// 3. Greater than or equal to (>=): Returns true if the left operand is greater than or equal to the right operand. Example: 5 >= 3 = true
console.log("Greater than or equal to (>=) a >= b:", a >= b);

// 4. Less than or equal to (<=): Returns true if the left operand is less than or equal to the right operand. Example: 5 <= 3 = false
console.log("Less than or equal to (<=) a <= b:", a <= b);

// 5. Equal to (==): Returns true if the operands are equal. Example: 5 == 3 = false
console.log("Equal to (==) a == b:", a == b);

console.log("JavaScript also has a strict equality operator (===) that checks for both value and type equality. Example: 5 === '5' = false");
console.log("normal equality (==) 5 == '5':", 5 == '5'); // true because the values are equal after type coercion   
console.log("Strict equality (===) 5 === '5':", 5 === '5'); // false because the types are different


// 6. Not equal to (!=): Returns true if the operands are not equal. Example: 5 != 3 = true
console.log("Not equal to (!=) a != b:", a != b);  

