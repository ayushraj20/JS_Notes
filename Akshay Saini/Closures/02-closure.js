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
