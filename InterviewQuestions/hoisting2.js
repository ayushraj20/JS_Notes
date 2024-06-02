console.log(name);
console.log(greet);
greet();

var greet = () => {
  console.log('Namaste World !!');
};

var name = 'John';

/*
Above 'greet()' is an arrow function, Unlike prev eg - 'hoisting.js' where it was normal function.
So in the memoryAllocation/parsing phase it will be assigned value as 'undefined' similar to a 'name',
So, in memoryAllocation phase 'greet()' will behave like a variable not a function

*/
