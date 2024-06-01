function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

const counter1 = counter();
counter1();
counter1();
counter1();

const counter2 = counter();
counter2();
counter2();
