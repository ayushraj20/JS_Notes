let name = {
  firstName: 'Ayush',
  lastName: 'Raj',
};

let name2 = {
  firstName: 'Sachin',
  lastName: 'Tendulkar',
};

let details = function (hometown, state) {
  console.log(this.firstName, this.lastName, 'from', hometown, ',', state);
};

// call() & apply() --> function borrowing
details.call(name, 'Aurangabad', 'Bihar');
details.apply(name2, ['Mumbai', 'Maharashtra']); //In apply(), we pass arguments as list of array

// bind() method returns a new function, unlike call() & apply() which calls the function.
let myDetails = details.bind(name, 'Aurangabad', 'Bihar');
console.log('myDetails ->', myDetails);
myDetails();
