var teacher = 'Sanket'; // global
function fun() {
  // global
  console.log(teacher); // no error will be given
  // console.log(content); // throws an error
  var teacher = 'Pulkit'; // scope of fun
  let content = 'JS'; // content will be access only post declaration
  if (content == 'JS') {
    let hours = '120+'; // block scope of if
    console.log(content, hours);
  }
  console.log(teacher, content);
}

fun();
console.log(teacher);
// console.log(content);

/**
 * 'var' does'nt know about the "Block Scope", "var" can only get "Function Scope" or "Global Scope".
 *
 * We can access a variable defined by 'var' even before its declaration (eg line-4 above)
 * But we can't do the same for a variable defined by 'let' and the region before declaration of
 * a variable using 'let' is called TEMPORAL DEAD ZONE (TDZ) .
 *
 *
 *
 */
