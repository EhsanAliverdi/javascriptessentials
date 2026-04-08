// In this section , we will learn about conditional operations in JavaScript. Conditional operations allow us to execute different blocks of code based on certain conditions. 
// The most common conditional statements in JavaScript are the if statement, else statement, and else if statement.
// 1. If Statement
// The if statement is used to execute a block of code if a specified condition is true. 
// Syntax:
// if (condition) {
//   // code to be executed if the condition is true
// }
let user1loggedIn = true;
if (user1loggedIn) {
  console.log("Welcome back, user!");
} 

// 2. Else Statement
// The else statement is used to execute a block of code if the condition in the if statement is false.
// Syntax:
// if (condition) { 
//   // code to be executed if the condition is true
// } else {
//   // code to be executed if the condition is false
// }
let user2loggedIn = false;
if (user2loggedIn) {
  console.log("Welcome back, user!");
} else {
  console.log("Please log in.");
}  

// 3. Else If Statement
// The else if statement is used to specify a new condition to test if the first condition is false.
// Syntax:
// if (condition1) {
//   // code to be executed if condition1 is true
// } else if (condition2) {
//   // code to be executed if condition2 is true
// } else {
//   // code to be executed if both condition1 and condition2 are false
// }
let user3loggedIn = false;
let user3isAdmin = true;
if (user3loggedIn) {
  console.log("Welcome back, user!");
} else if (user3isAdmin) {
  console.log("Welcome, admin!");
} else {
  console.log("Please log in.");
}

// Practice Exercise:
// is the number is  odd or even
let number = 10;
if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else if (number % 2 !== 0) {
  console.log(number + " is an odd number.");
}
else {  console.log("Please enter a valid number.");
}