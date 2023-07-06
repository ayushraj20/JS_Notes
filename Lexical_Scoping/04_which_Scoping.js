var teacher = "Sanket";
n; // -> global
function ask(question) {
  // -> global
  console.log(teacher, question);
}

function fun() {
  //-> global
  var teacher = "Pulkit"; // -> fun
  ask("why?");
}
fun();
