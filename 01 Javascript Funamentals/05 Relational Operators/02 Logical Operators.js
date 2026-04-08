//In this section we will cover Logical Operators in JavaScript.
console.log("-".repeat(60));
console.log('Logical Operators in JavaScript:');
console.log("-".repeat(60));
// Logical operators are used to combine multiple boolean expressions and return a boolean result based on the combination.
// The basic logical operators include:
// 1. Logical AND (&&): Returns true if both operands are true. Example: true && true = true
let x = true;
let y = false;
console.log('x:', x);
console.log('y:', y); 
console.log('Logical AND (&&) x && y:', x && y);

// 2. Logical OR (||): Returns true if at least one of the operands is true. Example: true || false = true
console.log('Logical OR (||) x || y:', x || y);

// 3. Logical NOT (!): Returns true if the operand is false, and false if the operand is true. Example: !true = false
console.log('Logical NOT (!) !x:', !x);