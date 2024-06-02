function x() {
  console.log('start...');
  // 'i' is initialized using 'var'.
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log('end!!!');
}

function y() {
  console.log('start...');
  // 'i' is initialized using 'let' which has block scope.
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log('end!!!');
}

// x();
// y();

/*
when loop is initialized using 'let' and since 'let' has block scope it will create new 'let' variable
after every iteration of the loop and since 'var' does'nt know about block scope it does't create new variable
after every iteration rather it points to the same memory location created by 'var' and updates that after every
iteration.
*/
