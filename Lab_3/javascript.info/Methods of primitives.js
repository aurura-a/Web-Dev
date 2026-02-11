let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}

let str = "Hello";

str.test = 5; // (*)

alert(str.test);