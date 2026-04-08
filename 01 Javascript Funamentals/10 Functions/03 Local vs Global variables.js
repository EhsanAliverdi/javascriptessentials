/* Local vs Global Variables in JavaScript
In this section, we will learn about the difference between local and global variables in JavaScript. 
Local variables are declared within a function and can only be accessed within that function. 
Global variables are declared outside any function and can be accessed from anywhere in the code.
*/

//Example of a local variable
console.log("-".repeat(20) + 'Local Variables' + "-".repeat(20));
function localVariableExample() {
    let localVar = 'I am a local variable';
    console.log(localVar); // Output: I am a local variable
}
localVariableExample();
//Trying to access localVar outside the function will result in an error
//console.log(localVar); // Uncaught ReferenceError: localVar is not defined
console.log('Trying to access localVar outside the function will result in an error: console.log(localVar);');
console.log('This will throw an error because localVar is not defined outside the function.');

//Example of a global variable
console.log("-".repeat(20) + 'Global Variables' + "-".repeat(20));
let globalVar = 'I am a global variable';
function globalVariableExample() {
    console.log(globalVar); // Output: I am a global variable
}
globalVariableExample();
console.log(globalVar); // Output: I am a global variable   
