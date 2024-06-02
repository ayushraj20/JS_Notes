// 'this' inside a function

// 'use strict';
function fun() {
  console.log(this);
}

fun();

/*
(this substitution) -> If the value of 'this' keyword is undefined or null, 'this' keyword will be replaced by
                       globalObject only in non-strict mode.

 The value of 'this' keyword also depends upon how the function is called.                      
*/
