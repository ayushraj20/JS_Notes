function fun() {
  var i = 5;
  while (i < 10) {
    var x = i;
    i++;
  }
  console.log(x);
}
fun();

/**
 * At Line-7 ideally variable "x" should'nt be accesible because it is declared
 * inside "Block scope" of "While", but it is accessible coz "var" does'nt care
 * about block scope.
 *
 */
