/** 
 * In this section,
 * we will learn about working with objects in JavaScript, including how to create, access, modify, and delete properties.
*/

//Creating an object using object literal syntax
console.log("-".repeat(20) + 'Creating Objects' + "-".repeat(20));
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
console.log('Car Object:', car);

//Modifying properties of an object
console.log('We will update the year of the car to 2021 using dot notation: car.year = 2021;');
car.year = 2021;
console.log('Updated Car Object:', car);

//We can also add new properties to an object
console.log('Adding a new property "color" to the car object: car.color = "red";');
car.color = 'red';
console.log('Car Object with new property:', car); 

//we can delete properties from an object using the delete operator
console.log('Deleting the "model" property from the car object: delete car.model;');
delete car.model;
console.log('Car Object after deletion:', car);

//We can also check if a property exists in an object using the in operator
console.log('Checking if the "make" property exists in the car object: "make" in car;');
console.log('Does "make" exist in car?', 'make' in car);
console.log('Checking if the "model" property exists in the car object: "model" in car;');
console.log('Does "model" exist in car?', 'model' in car);  

//We can also iterate over the properties of an object using a for...in loop
console.log('Iterating over properties of the car object using for...in loop:');
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

//We can also use Object.keys() to get an array of the keys of an object, and Object.values() to get an array of the values of an object
console.log('Using Object.keys() to get an array of keys of the car object:');
console.log(Object.keys(car));
console.log('Using Object.values() to get an array of values of the car object:');
console.log(Object.values(car));


//Finally, we can use Object.entries() to get an array of key-value pairs of an object
console.log('Using Object.entries() to get an array of key-value pairs of the car object:');
console.log(Object.entries(car));


// we can add objects as properties of other objects, creating nested objects
console.log('Creating a nested object for the car object:');
car.owner = { name: 'John Doe', age: 35 };
console.log('Car Object with nested owner object:', car);