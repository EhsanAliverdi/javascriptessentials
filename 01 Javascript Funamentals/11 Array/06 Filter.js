/*
In this section, we will explore the filter() method in  Arrays.
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
It allows us to filter elements based on specific conditions, making our code more concise and readable.
*/

//1. Using the filter() method to filter even numbers from an array
console.log("-".repeat(20) + 'Filtering Even Numbers from an Array' + "-".repeat(20));
let numbers = [1, 2, 3, 4, 5, 6];
console.log('Numbers Array:', numbers);
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

//2. Using the filter() method to filter out strings from an array
console.log("-".repeat(20) + 'Filtering Out Strings from an Array' + "-".repeat(20));
let mixedArray = [1, 'hello', 2, 'world', 3, 'javascript'];
console.log('Mixed Array:', mixedArray);
let numbersOnly = mixedArray.filter(item => typeof item === 'number');
console.log('Numbers Only:', numbersOnly);
let stringsOnly = mixedArray.filter(item => typeof item === 'string');
console.log('Strings Only:', stringsOnly);