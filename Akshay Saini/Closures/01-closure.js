/*
Definition -> Function along with its lexical scope forms a closure.

Also checkout 'Sanket Singh >> Notes_Printed' folder

*/

function x() {
  var dob = 16;

  function y() {
    console.log(dob);
  }

  // dob = 24; //uncomment this line to see the change in O/P.
  return y;
}

var z = x();
console.log(z);

z();

/*
Even if the variable 'dob' is not declared inside 'function y()' ,
the 'function y()' remembers the value of 'dob'.

Uncommenting the line 14 will give output as '24' coz, due to closure 'function y()' remembers
the reference of variable 'dob' it does'nt remember the value, it remembers the reference of the variable.

*/
