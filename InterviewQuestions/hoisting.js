/*
Hoisting - In JS we can access functions and variables even before their initialization or declaration,
           this phenomenon is called 'Hoisting'.

Like in below example we can call function 'greet()' even before it is declared.
also we can access variable 'name' even before its initialization.           
*/

console.log(name);
console.log(greet);
greet();

function greet() {
  console.log('Namaste World !!');
}

var name = 'John';
