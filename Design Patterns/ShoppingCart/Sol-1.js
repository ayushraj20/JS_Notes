class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Coupon {
  constructor(type, value, productType = null, productIndex = null) {
    this.type = type; // Type of coupon: "percentAll", "percentNext", or "fixedNth"
    this.value = value; // Discount percentage or fixed amount
    this.productType = productType; // Applicable product type for "fixedNth" coupon
    this.productIndex = productIndex; // Applicable product index for "fixedNth" coupon
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.productCounts = {};
  }

  addItem(item) {
    this.items.push(item);
  }

  applyCoupons() {
    let totalPrice = 0;
    let nextDiscountPercent = 1.0; // For percent off on next item
    let percentAllDiscount = 1.0; // For all-items discount

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
            // Only store the discount to be applied later, based on cart sequence
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
            discount instanceof Coupon &&
            discount.type === 'fixedNth' &&
            discount.productType === item.name &&
            this.productCounts[item.name] === discount.productIndex
          ) {
            productPrice -= discount.value;
          }
        }

        // Add discounted price to the total
        totalPrice += Math.max(0, productPrice); // Ensure no negative price
      }

      console.log('productCounts', this.productCounts);
    }

    this.total = totalPrice;
    return this.total;
  }
}

// Example Usage:

let cart = new Cart();

//TestCase - 1
// cart.addItem(new Coupon('percentNext', 10));
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Product('stationery organizer', 20));

//TestCase - 2
cart.addItem(new Product('postcard sorter', 10));
cart.addItem(new Coupon('percentNext', 10));
cart.addItem(new Product('stationery organizer', 20));

// TestCase - 3
// cart.addItem(new Coupon('percentAll', 5)); // 5% off all products
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Product('stationery organizer', 15));
// cart.addItem(new Coupon('fixedNth', 5, 'postcard sorter', 3)); // $5 off 3rd postcard sorter
// cart.addItem(new Coupon('percentNext', 50)); // 50% off next product
// cart.addItem(new Product('postcard sorter', 10));
// cart.addItem(new Product('business card holder', 18));
// cart.addItem(new Coupon('fixedNth', 2, 'postcard sorter', 2)); // $2 off 2nd postcard sorter
// cart.addItem(new Product('postcard sorter', 16));
// cart.addItem(new Product('postcard sorter', 10));

// Calculate total
console.log('Total Price:', cart.applyCoupons());
