/*
In this section, we will explore  sets in  Arrays.
A set is a collection of unique values, meaning that it cannot contain duplicate elements. 
In JavaScript, we can use the Set object to create and manage sets in arrays.
Sets provide a convenient way to store and manipulate unique values, making them useful for various applications such as filtering duplicates, performing set operations, and more.
*/

//1. Creating a Set from an array
console.log("-".repeat(20) + 'Creating a Set from an Array' + "-".repeat(20));
let numbers = [1, 2, 3, 4, 5, 2, 3];
console.log('Numbers Array:', numbers);
let uniqueNumbersSet = new Set(numbers);
console.log('Unique Numbers Set:', uniqueNumbersSet);

//2. Set operations: Union, Intersection, and Difference
console.log("-".repeat(20) + 'Set Operations: Union, Intersection, and Difference' + "-".repeat(20));
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);
console.log('Set A:', setA);
console.log('Set B:', setB);
// Union of Set A and Set B
let unionSet = new Set([...setA, ...setB]);
console.log('Union of Set A and Set B:', unionSet);
// Intersection of Set A and Set B
let intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log('Intersection of Set A and Set B:', intersectionSet);
// Difference of Set A and Set B
let differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log('Difference of Set A and Set B:', differenceSet);

//3. Assining values to a Set and converting it back to an array
console.log("-".repeat(20) + 'Assigning Values to a Set and Converting it Back to an Array' + "-".repeat(20));
let newSet = new Set();
newSet.add(10);
newSet.add(20);
newSet.add('hello');
newSet.add(10); // Duplicate value, will not be added
console.log('New Set:', newSet);
let newArray = Array.from(newSet);
console.log('Converted Array from Set:', newArray);