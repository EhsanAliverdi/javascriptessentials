/* 
In this section, we will explore the Map object in  Arrays .
The Map object is a collection of key-value pairs where both keys and values can be of any type. 
It provides a more flexible and efficient way to store and manage data compared to traditional objects.
Maps maintain the order of insertion, allowing us to iterate through the entries in the order they were added.
*/

//1. Creating a Map and adding key-value pairs
console.log("-".repeat(20) + 'Creating a Map and Adding Key-Value Pairs' + "-".repeat(20));
let myArray =[ 2, 12, 111, 173, 48, 23, 45, 67, 89, 34];
let myMap = new Map();
myMap.set('numbers', myArray);
myMap.set('length', myArray.length);
console.log('My Map:', myMap);


let numbers =[42, 23, 16, 15, 8, 4];
numbers.filter(num=> num % 2 === 0).map(num => num * 2).forEach(num => console.log(num));