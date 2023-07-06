console.log("hi");
console.lo("hello");
console.log("bye");

console.log((10).toString()); // https://stackoverflow.com/questions/13149282/why-does-10-tostring-work-but-10-tostring-does-not (go to this link for expl)

/* 
  JS is neither compiled nor interpreted programming language.
  JS Code is Run or executed in two phases -
    1. Parcing Phase.(scope resolution is done - Global Scope
                                               - Function Scope
                                               - Block Scope  )
    2. Execution Phase.(value assignment to the variables is done)


demo1.js fails at "Execution Phase" while demo2.js fails in "Parcing Phase".

*/
