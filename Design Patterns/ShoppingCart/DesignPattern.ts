class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Base class for Coupon types
abstract class Coupon {
  value: number;
  type: string;

  constructor(value: number) {
    this.value = value;
  }
}

// Coupon types
class PercentAllCoupon extends Coupon {
  type: string;
  constructor(value: number) {
    super(value);
    this.type = 'percentAll';
  }
}

class PercentNextCoupon extends Coupon {
  type: string;
  constructor(value: number) {
    super(value);
    this.type = 'percentNext';
  }
}

class FixedNthCoupon extends Coupon {
  productType: string;
  productIndex: number;
  type: string;

  constructor(value: number, productType: string, productIndex: number) {
    super(value);
    this.type = 'fixedNth';
    this.productType = productType;
    this.productIndex = productIndex;
  }
}

// Coupon Factory for creating different coupon types
class CouponFactory {
  static createCoupon(
    type: string,
    value: number,
    productType: string | null = null,
    productIndex: number | null = null
  ): Coupon {
    switch (type) {
      case 'percentAll':
        return new PercentAllCoupon(value);
      case 'percentNext':
        return new PercentNextCoupon(value);
      case 'fixedNth':
        if (productType && productIndex !== null) {
          return new FixedNthCoupon(value, productType, productIndex);
        } else {
          throw new Error('Invalid parameters for fixedNth coupon');
        }
      default:
        throw new Error('Invalid coupon type');
    }
  }
}

// Singleton Cart class
class Cart {
  private static _instance: Cart;
  private items: (Product | Coupon)[] = [];
  private total: number = 0;
  private productCounts: { [key: string]: number } = {};

  // Private constructor to prevent direct instantiation
  private constructor() {}

  // Singleton access
  public static get instance(): Cart {
    if (!Cart._instance) {
      Cart._instance = new Cart();
    }
    return Cart._instance;
  }

  addItem(item: Product | Coupon) {
    this.items.push(item);
  }

  applyCoupons(): number {
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
            const fixedNthCoupon = item as FixedNthCoupon;
            if (!this.productCounts[fixedNthCoupon.productType]) {
              this.productCounts[fixedNthCoupon.productType] = 0;
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
        totalPrice += Math.max(0, productPrice); // Ensure no negative price
      }
    }

    this.total = totalPrice;
    return this.total;
  }
}

// Example Usage:
let cart = Cart.instance;

// Adding items and coupons as per example
cart.addItem(CouponFactory.createCoupon('percentAll', 5));
cart.addItem(new Product('postcard sorter', 10));
cart.addItem(new Product('stationery organizer', 15));
cart.addItem(CouponFactory.createCoupon('fixedNth', 5, 'postcard sorter', 3));
cart.addItem(CouponFactory.createCoupon('percentNext', 50));
cart.addItem(new Product('postcard sorter', 10));
cart.addItem(new Product('business card holder', 18));
cart.addItem(CouponFactory.createCoupon('fixedNth', 2, 'postcard sorter', 2));
cart.addItem(new Product('postcard sorter', 16));
cart.addItem(new Product('postcard sorter', 10));

// Calculate total
console.log('Total Price:', cart.applyCoupons()); // Expected output: $63.30
