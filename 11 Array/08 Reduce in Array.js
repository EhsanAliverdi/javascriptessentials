/*
In this section, we will explore the reduce() method in  Arrays.
The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
It allows us to accumulate values based on a specific logic, making it a powerful tool for various operations such as summing numbers, concatenating strings, or even creating complex data structures.
*/

//1. Using the reduce() method to sum all numbers in an array
console.log("-".repeat(20) + 'Summing All Numbers in an Array' + "-".repeat(20));
let numbers = [1, 2, 3, 4, 5];
console.log('Numbers Array:', numbers);
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of Numbers:', sum);