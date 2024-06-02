let name = {
  firstName: 'Ayush',
  lastName: 'Raj',
};

let name2 = {
  firstName: 'Sachin',
  lastName: 'Tendulkar',
};

let printDetails = function (hometown, state) {
  console.log(this.firstName, this.lastName, 'from', hometown, ',', state);
};

// call() & apply() --> function borrowing.
printDetails.call(name, 'Aurangabad', 'Bihar');
printDetails.apply(name2, ['Mumbai', 'Maharashtra']); //In apply(), we pass list of arguments as an array.

// bind() method returns a new function, unlike call() & apply() which calls the function.
let myDetails = printDetails.bind(name, 'Aurangabad', 'Bihar');
console.log('myDetails ->', myDetails);
myDetails();
