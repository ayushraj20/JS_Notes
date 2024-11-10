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
  }

  calculateTotal() {
    let totalPrice = 0;
    let nextDiscountPercent = 1.0;
    let allDiscountPercent = 1.0;

    for (let item of this.items) {
      if (item instanceof Coupon) {
        switch (item.type) {
          case 'percentAll':
            nextDiscountPercent = 1 - item.value / 100;
            break;

          case 'percentNext':
            allDiscountPercent = 1 - item.value / 100;
            break;
        }
      } else if (item instanceof Product) {
      }
    }
    return this.totalPrice;
  }
}
