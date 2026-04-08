/*
In this section, we will explore array destructuring in JavaScript.
Array destructuring is a convenient way to extract values from arrays and assign them to variables in a single statement. 
It allows us to unpack values from arrays into distinct variables, making our code cleaner and more readable.
*/

//1. Basic array destructuring
console.log("-".repeat(20) + 'Basic Array Destructuring' + "-".repeat(20));
let numbers = [1, 2, 3];
console.log('Numbers Array:', numbers);
let [a, b, c] = numbers;
console.log('Destructured Values:', a, b, c);

//2. Skipping values in array destructuring
console.log("-".repeat(20) + 'Skipping Values in Array Destructuring' + "-".repeat(20));
let moreNumbers = [10, 20, 30, 40];
console.log('More Numbers Array:', moreNumbers);
let [x, , z] = moreNumbers;
console.log('Destructured Values (Skipping):', x, z);

//3. Using rest operator in array destructuring
console.log("-".repeat(20) + 'Using Rest Operator in Array Destructuring' + "-".repeat(20));
let evenMoreNumbers = [100, 200, 300, 400, 500];
let [first, second, ...rest] = evenMoreNumbers;
console.log('Destructured Values (Rest Operator):', first, second, rest);

//4. Destructuring with default values
console.log("-".repeat(20) + 'Destructuring with Default Values' + "-".repeat(20));
let someNumbers = [5];
let [num1, num2 = 10] = someNumbers;
console.log('Destructured Values (Default):', num1, num2);

//5. Swapping variables using array destructuring
console.log("-".repeat(20) + 'Swapping Variables using Array Destructuring' + "-".repeat(20));
let firstName = 'John'; 
let lastName = 'Doe';
console.log('Before Swapping:', firstName, lastName);
[firstName, lastName] = [lastName, firstName];
console.log('After Swapping:', firstName, lastName);

//6. Nested array destructuring
console.log("-".repeat(20) + 'Nested Array Destructuring' + "-".repeat(20));
let nestedArray = [1, [2, 3], 4];
let [one, [two, three], four] = nestedArray;
console.log('Destructured Values (Nested):', one, two, three, four);

//7. Destructuring with function return values
console.log("-".repeat(20) + 'Destructuring with Function Return Values' + "-".repeat(20));
function getCoordinates() {
    return [10, 20];
}
let [xCoord, yCoord] = getCoordinates();
console.log('Destructured Values (Function Return):', xCoord, yCoord);

//8. Destructuring with strings
console.log("-".repeat(20) + 'Destructuring with Strings' + "-".repeat(20));
let str = "Hello";
let [h, e, l, l2, o] = str;
console.log('Destructured Values (String):', h, e, l, l2, o);

//9. Destructuring sentences into words
console.log("-".repeat(20) + 'Destructuring Sentences into Words' + "-".repeat(20));
let sentence = "JavaScript is awesome";
let [word1, word2, word3] = sentence.split(" ");
console.log('Destructured Values (Sentence):', word1, word2, word3);

