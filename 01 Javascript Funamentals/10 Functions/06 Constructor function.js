/* 
In this section we will learn about constructor functions in JavaScript, which are a special type of function used to create and initialize objects. 
Constructor functions are typically used to create multiple instances of an object with similar properties and methods. 
 They are defined using a regular function syntax, but by convention, they are named with a capital letter to distinguish them from regular functions.
*/

//The syntax for a constructor function is as follows:
// function ConstructorFunctionName(parameters) {
//     this.property1 = value1;
//     this.property2 = value2;
//     ...
//     this.method1 = function() {
//         // method body
//     };
//     ...
// }

//Here is an example of a constructor function that creates a Person object with properties for name and age, and a method to greet the person:
console.log("-".repeat(20) + 'Constructor Functions' + "-".repeat(20));
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
console.log('Creating a new Person object using the constructor function: let person1 = new Person("Alice", 30);');
let person1 = new Person("Alice", 30);
console.log('Person Object:', person1);
console.log('Calling the greet method of the person1 object: person1.greet();');
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.  
//We can create multiple instances of the Person object using the constructor function. For example:
console.log('Creating another Person object using the constructor function: let person2 = new Person("Bob", 25);');
let person2 = new Person("Bob", 25);
console.log('Person Object:', person2);
console.log('Calling the greet method of the person2 object: person2.greet();');
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.