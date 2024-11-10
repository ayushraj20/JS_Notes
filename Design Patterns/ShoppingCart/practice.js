class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Coupon {
  constructor(type, value, productType, productIndex) {
    this.type = type; // percentAll, percentNext, fixedNth.
    this.value = value;
    this.productType = productType ?? null;
    this.productIndex = productIndex ?? null;
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.finalPrice = 0;
    this.productCount = {};
  }

  addItem(item) {
    this.items.push(item);
    // console.log('items', this.items);
  }

  calculateTotal() {
    let totalPrice = 0;
    let nextDiscountPercent = 1.0;
    let allDiscountPercent = 1.0;

    for (let item of this.items) {
      if (item instanceof Coupon) {
        switch (item.type) {
          case 'percentAll':
            allDiscountPercent = 1 - item.value / 100;
            break;

          case 'percentNext':
            nextDiscountPercent = 1 - item.value / 100;
            break;

          case 'fixedNth':
            if (!this.productCount[item.productType]) {
              this.productCount[item.productType] = 0;
            }
        }
      } else if (item instanceof Product) {
        let productPrice = item.price;

        productPrice *= allDiscountPercent;

        productPrice *= nextDiscountPercent;
        nextDiscountPercent = 1.0;

        if (!this.productCount[item.name]) {
          this.productCount[item.name] = 0;
        }
        this.productCount[item.name] += 1;

        for (let discount of this.items) {
          if (
            discount instanceof Coupon &&
            discount.type === 'fixedNth' &&
            discount.productType === item.name &&
            discount.productIndex === this.productCount[item.name]
          ) {
            productPrice -= discount.value;
          }
        }

        totalPrice += Math.max(productPrice, 0);
      }
    }

    this.finalPrice = totalPrice;
    return this.finalPrice;
  }
}

// Example Usage:

let cart = new Cart();

//TestCase - 1
// cart.addItem(new Coupon('percentNext', 10));
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Product('stationery organizer', 20));

//TestCase - 2
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Coupon('percentNext', 10));
// cart.addItem(new Product('stationery organizer', 20));

// TestCase - 3
cart.addItem(new Coupon('percentAll', 5)); // 5% off all products
cart.addItem(new Product('postcard sorter', 10));
cart.addItem(new Product('stationery organizer', 15));
cart.addItem(new Coupon('fixedNth', 5, 'postcard sorter', 3)); // $5 off 3rd postcard sorter
cart.addItem(new Coupon('percentNext', 50)); // 50% off next product
cart.addItem(new Product('postcard sorter', 10));
cart.addItem(new Product('business card holder', 18));
cart.addItem(new Coupon('fixedNth', 2, 'postcard sorter', 2)); // $2 off 2nd postcard sorter
cart.addItem(new Product('postcard sorter', 16));
cart.addItem(new Product('postcard sorter', 10));

// Calculate total
console.log('Total Price:', cart.calculateTotal());
