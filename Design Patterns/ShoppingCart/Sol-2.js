class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Coupon {
  constructor(type, value, productType = null, productIndex = null) {
    this.type = type; // Type: "percentAll", "percentNext", or "fixedNth"
    this.value = value; // Discount percentage or fixed amount
    this.productType = productType; // Applicable product type for "fixedNth" coupon
    this.productIndex = productIndex; // Applicable product index for "fixedNth" coupon
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.productCounts = {};
    this.percentAllDiscount = 1.0; // Combined "percentAll" discount factor
    this.fixedNthDiscounts = {}; // Map for "fixedNth" coupons by product type and index
    this.percentNextCoupon = null; // Stores percentNext value for the immediate next product
  }

  addItem(item) {
    this.items.push(item);
  }

  organizeCoupons() {
    for (let item of this.items) {
      if (item instanceof Coupon) {
        switch (item.type) {
          case 'percentAll':
            this.percentAllDiscount *= 1 - item.value / 100;
            break;
          case 'fixedNth':
            if (!this.fixedNthDiscounts[item.productType]) {
              this.fixedNthDiscounts[item.productType] = {};
            }
            this.fixedNthDiscounts[item.productType][item.productIndex] =
              item.value;
            break;
        }
      }
    }
  }

  calculateTotal() {
    this.organizeCoupons();
    let totalPrice = 0;

    for (let item of this.items) {
      if (item instanceof Coupon && item.type === 'percentNext') {
        // Store the "percentNext" coupon to apply it to the next product
        this.percentNextCoupon = item.value;
      } else if (item instanceof Product) {
        let productPrice = item.price;

        // Apply "percentAll" discount to the product
        productPrice *= this.percentAllDiscount;

        // Apply "percentNext" discount if available and reset
        if (this.percentNextCoupon !== null) {
          productPrice *= 1 - this.percentNextCoupon / 100;
          this.percentNextCoupon = null; // Reset after applying
        }

        // Track occurrences of each product type
        if (!this.productCounts[item.name]) {
          this.productCounts[item.name] = 0;
        }
        this.productCounts[item.name] += 1;

        // Apply "fixedNth" discount if conditions match
        const count = this.productCounts[item.name];
        if (
          this.fixedNthDiscounts[item.name] &&
          this.fixedNthDiscounts[item.name][count]
        ) {
          productPrice -= this.fixedNthDiscounts[item.name][count];
        }

        // Add discounted price to total, ensuring no negative price
        totalPrice += Math.max(0, productPrice);
      }
    }

    return totalPrice;
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
console.log('Total Price:', cart.calculateTotal()); // Expected output: $63.30
