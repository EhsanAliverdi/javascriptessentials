/*
In this section,
we will learn about methods in JavaScript, which are functions that are properties of an object. 
Methods allow us to define behavior for objects and can be used to manipulate the data stored in the object or perform actions related to the object.       
A method is defined as a function that is a property of an object. The syntax for defining a method is as follows:
let objectName = {
    methodName: function(parameters) {
        // method body
        return value; // optional
    }
*/

//Here is an example where we define laptop object with a method that returns a string describing the laptop:
console.log("-".repeat(20) + 'Methods' + "-".repeat(20));
let laptop = {
    brand: 'Dell',
    model: 'XPS 13',
    getDescription: function() {
        return `This is a Dell XPS 13.`;// later we will learn about this keyword and how to use it to access the properties of the object within the method.
    },
    getPerformance: function() {
        return "This laptop has excellent performance.";
    }
};
console.log('Laptop Object:', laptop);
console.log('Calling the getDescription method of the laptop object: laptop.getDescription();');
let description = laptop.getDescription();
console.log('Description:', description); // Output: Description: This is a Dell XPS 13.



// this keyword refers to the current object that the method is a property of. 
// It allows us to access the properties of the object within the method. 
// for example we will deifne a rectangle object with methods to calculate the area and perimeter of the rectangle using the this keyword to access the width and height properties of the rectangle object:
let rectangle = {
    width: 5,
    height: 3,
    getArea: function() {
        return this.width * this.height;
    },
    getPerimeter: function() {
        return 2 * (this.width + this.height);
    }
};
console.log('Rectangle Object:', rectangle);
console.log('Calling the getArea method of the rectangle object: rectangle.getArea();');
let area = rectangle.getArea();
console.log('Area:', area);