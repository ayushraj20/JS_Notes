function Product(n, p, d) {
  name = n;
  this.price = p;
  this.description = d;

  this.display = function () {
    console.log("inside display -->", name, this.price);
  };
}
const p = new Product("bag", 100, "cool new bag");
console.log(p);
p.display();
