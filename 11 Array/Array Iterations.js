/*
In this section, we will explore looping through arrays in JavaScript.
Looping through arrays allows us to access and manipulate each element in the array efficiently.
JavaScript provides several methods for looping through arrays, including traditional for loops, for...of loops, and array methods like forEach().
*/

//1. Using a traditional for loop to iterate through an array
console.log("-".repeat(20) + 'Looping through Arrays using for loop' + "-".repeat(20));
let fruits = ['apple', 'banana', 'orange']; 
console.log('Fruits Array:', fruits);
console.log('Looping through the fruits array using a for loop:');
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

//2. Using a for...of loop to iterate through an array
console.log("-".repeat(20) + 'Looping through Arrays using for...of loop' + "-".repeat(20));
console.log('Looping through the fruits array using a for...of loop:');
for (let fruit of fruits) {
    console.log(fruit);
}

//3. Using the forEach() method to iterate through an array
console.log("-".repeat(20) + 'Looping through Arrays using forEach() method' + "-".repeat(20));
console.log('Looping through the fruits array using the forEach() method:');
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});