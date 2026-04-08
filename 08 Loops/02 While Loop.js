//In this section,
// we will learn about while loops in JavaScript, which are a fundamental control flow statement used to repeat a block of code as long as a specified condition is true.
// The syntax of a while loop is as follows:
// while (condition) {
//   // code to be executed
// }

// The while loop consists of a condition that is evaluated before each iteration of the loop. If the condition is true, the loop continues to execute; if it is false, the loop terminates.

// Example of a while loop that prints numbers from 1 to 5
console.log('While Loop Example:');
let i = 1; // Initialization
while (i <= 5) { // Condition
  console.log(i);
  i++; // Increment
}   

// We also have a do-while loop, which is similar to a while loop but guarantees that the code block will be executed at least once, as the condition is evaluated after the block of code is executed.
// The syntax of a do-while loop is as follows:
// do {
//   // code to be executed
// } while (condition); 
// Example of a do-while loop that prints numbers from 1 to 5
console.log('Do-While Loop Example:');
let j = 1; // Initialization
do {
  console.log(j);
  j++; // Increment
} while (j <= 5); // Condition