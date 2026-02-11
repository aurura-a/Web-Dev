alert("Hello");
//The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

//Task
//<!DOCTYPE html>
//<html>
//<body>
//
//  <script>
//    'use strict';
//
//    let name = prompt("What is your name?", "");
//    alert(name);
//  </script>
//
//</body>
//</html>
let name = prompt("What is your name?", "");
alert(name);