class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Coupon Factory to create different types of coupons
class CouponFactory {
  static createCoupon(type, value, productType = null, productIndex = null) {
    switch (type) {
      case 'percentAll':
        return new PercentAllCoupon(value);
      case 'percentNext':
        return new PercentNextCoupon(value);
      case 'fixedNth':
        return new FixedNthCoupon(value, productType, productIndex);
      default:
        throw new Error('Invalid coupon type');
    }
  }
}

// Coupon base class
class Coupon {
  constructor(value) {
    this.value = value;
  }
}

// Coupon types
class PercentAllCoupon extends Coupon {
  constructor(value) {
    super(value);
    this.type = 'percentAll';
  }
}

class PercentNextCoupon extends Coupon {
  constructor(value) {
    super(value);
    this.type = 'percentNext';
  }
}

class FixedNthCoupon extends Coupon {
  constructor(value, productType, productIndex) {
    super(value);
    this.type = 'fixedNth';
    this.productType = productType;
    this.productIndex = productIndex;
  }
}

// Singleton Cart class
class Cart {
  static instance;
  constructor() {
    if (Cart.instance) {
      return Cart.instance;
    }

    this.items = [];
    this.total = 0;
    this.productCounts = {};
    Cart.instance = this;
  }

  static getInstance() {
    if (!Cart.instance) {
      Cart.instance = new Cart();
    }
    return Cart.instance;
  }

  addItem(item) {
    this.items.push(item);
  }

  applyCoupons() {
    let totalPrice = 0;
    let nextDiscountPercent = 1.0;
    let percentAllDiscount = 1.0;

    for (let item of this.items) {
      if (item instanceof Coupon) {
        switch (item.type) {
          case 'percentAll':
            percentAllDiscount *= 1 - item.value / 100;
            break;
          case 'percentNext':
            nextDiscountPercent *= 1 - item.value / 100;
            break;
          case 'fixedNth':
            if (!this.productCounts[item.productType]) {
              this.productCounts[item.productType] = 0;
            }
            break;
        }
      } else if (item instanceof Product) {
        let productPrice = item.price;

        // Apply general percent discount for all items
        productPrice *= percentAllDiscount;

        // Apply discount for next item
        productPrice *= nextDiscountPercent;
        nextDiscountPercent = 1.0; // Reset for next item

        // Track occurrences of this product type for specific discounts
        if (!this.productCounts[item.name]) {
          this.productCounts[item.name] = 0;
        }
        this.productCounts[item.name] += 1;

        // Apply fixed discount for specific occurrences
        for (let discount of this.items) {
          if (
            discount instanceof FixedNthCoupon &&
            discount.productType === item.name &&
            this.productCounts[item.name] === discount.productIndex
          ) {
            productPrice -= discount.value;
          }
        }

        // Add discounted price to the total
        totalPrice += Math.max(0, productPrice);
      }
    }

    this.total = totalPrice;
    return this.total;
  }
}

// Example Usage:
let cart = Cart.getInstance();

//TestCase - 1
// cart.addItem(CouponFactory.createCoupon('percentNext', 10));
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Product('stationery organizer', 20));

//TestCase - 2
cart.addItem(new Product('postcard sorter', 10));
cart.addItem(CouponFactory.createCoupon('percentNext', 10));
cart.addItem(new Product('stationery organizer', 20));

// Test Case - 3
// cart.addItem(CouponFactory.createCoupon('percentAll', 5));
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Product('stationery organizer', 15));
// cart.addItem(CouponFactory.createCoupon('fixedNth', 5, 'postcard sorter', 3));
// cart.addItem(CouponFactory.createCoupon('percentNext', 50));
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Product('business card holder', 18));
// cart.addItem(CouponFactory.createCoupon('fixedNth', 2, 'postcard sorter', 2));
// cart.addItem(new Product('postcard sorter', 16));
// cart.addItem(new Product('postcard sorter', 10));

// Calculate total
console.log('Total Price:', cart.applyCoupons()); // Expected output: $63.30
