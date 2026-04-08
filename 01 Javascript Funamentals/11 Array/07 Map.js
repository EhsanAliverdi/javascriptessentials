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

//2. Map has  key-value pairs, so we can use the map() method to transform the values in the Map
console.log("-".repeat(20) + 'Using the map() method to Transform Values in a Map' + "-".repeat(20));
let exampleMap = new Map();
exampleMap.set(1, 'one');
exampleMap.set(2, 'two');
exampleMap.set('three', 'three');
console.log('Original Map:', exampleMap);

//3. iterating through a Map using forEach() method
console.log("-".repeat(20) + 'Iterating through a Map using forEach() method' + "-".repeat(20));
exampleMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});