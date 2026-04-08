//In this section, we will learn about the switch statement in JavaScript, 
// which is a control flow statement that allows us to execute different blocks of code based on the value of an expression.
// The switch statement is often used as an alternative to multiple if-else statements when you have a single variable that can take on multiple values.
// Syntax:
// switch (expression) { 
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   ... 
//   default:
//     // code to be executed if expression does not match any case
// }
let dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log("Today is Monday.");
    break;
    case 2:
    console.log("Today is Tuesday.");
    break;
    case 3:
    console.log("Today is Wednesday.");
    break;
    case 4:
    console.log("Today is Thursday.");
    break;
    case 5:
    console.log("Today is Friday.");
    break;
    case 6:
    console.log("Today is Saturday.");
    break;
    case 7:
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid day of the week.");
}
