class Product {
  //   name;
  //   price;
  //   description;

  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;

    // return "10"; // returning a primitive (integer,string,etc) from constructor has no effect at all.
    // return {x:10} //returning an object returns the same obj.
    // return this; // if u don't return anything it is equal to saying return "this" .
  }

  display() {
    // Print the product.
  }
}

const p = new Product("Iphone", 75000, "this a brand new iphone");
console.log(p);

/*
    'new' keyword creates a brand new empty object.
    Since 'this' points to the calling context so here in above eg 'this' points to the 
    brand new empty obj created by 'new' keyword.

*/
