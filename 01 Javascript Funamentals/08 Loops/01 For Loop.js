//In This section 
// we will learn about for loops in JavaScript, which are a fundamental control flow statement used to repeat a block of code a specified number of times.
// The syntax of a for loop is as follows:
// for (initialization; condition; increment) {
//   // code to be executed
// }

// The for loop consists of three parts: initialization, condition, and increment.
// 1. Initialization: This is where you initialize a variable that will be used in the loop. It is executed only once at the beginning of the loop.
// 2. Condition: This is a boolean expression that is evaluated before each iteration of the loop. If the condition is true, the loop continues to execute; if it is false, the loop terminates.
// 3. Increment: This is where you update the variable initialized in the first part. It is executed after each iteration of the loop.

// Example of a for loop that prints numbers from 1 to 5
console.log('For Loop Example:');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}