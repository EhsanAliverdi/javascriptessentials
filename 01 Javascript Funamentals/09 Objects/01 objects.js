/** 
 * In this section,
 * we will learn about objects in JavaScript, which are a fundamental data structure used to store collections of key-value pairs.
 * An object is a standalone entity, with properties and type.
 * The syntax of an object is as follows:
 * let objectName = {
 *   key1: value1,
 *   key2: value2,
 *   ...
 * };
 */

//Objects are not primitive data types; they are reference types. This means that when you assign an object to a variable, you are assigning a reference to that object in memory, rather than the actual value of the object.
//we will start with object literals, which are a simple way to create objects in JavaScript.
console.log ("-".repeat(20) + 'Object Literals' + "-".repeat(20));
let person = {
    name: 'Alice',
    age: 30,
    sex: 'male'
};

console.log('Person Object:', person);
//We can access the properties of an object using dot notation or bracket notation.
console.log('Accessing properties using dot notation:');
console.log('Name:', person.name);
console.log('Age:', person.age);    
console.log('We can also access properties using bracket notation:');
console.log('Name:', person['name']);
console.log('Age:', person['age']);
