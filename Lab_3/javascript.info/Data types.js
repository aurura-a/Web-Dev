// no error
let message = "hello";
message = 123456

alert( 1 / 0 ); // Infinity

//an “approximate” value may be stored
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//Task
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?