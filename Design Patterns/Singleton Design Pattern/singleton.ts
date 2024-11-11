// let instance;

// class ShoppingCart {
//   constructor() {
//     if (instance) {
//       throw new Error('Instance already exists');
//     }
//     instance = this;
//     this.cart = [];
//   }

//   addItem(item) {
//     this.cart.push(item);
//   }

//   getItems() {
//     console.log(this.cart);
//   }
// }

// const singletonCart = Object.freeze(new ShoppingCart());

// export default singletonCart;

class Customer {
  static instance: null | Customer = null;
  private constructor(name, id, tableNo) {
    console.log('inside constructor');
    // this.name = name;
    // this.id = id;
    // this.tableNo = tableNo ?? null;
    // groupSize;
    // orderId;
  }

  static getInstance() {
    if (!Customer.instance) {
      Customer.instance = new Customer(1, 2, 3);
    }
    return Customer.instance;
  }
}

const cust1 = Customer.getInstance();
const cust2 = Customer.getInstance();

// const cust3 = new Customer(1, 2, 3);
// const cust4 = new Customer(1, 2, 3);

console.log('1', cust1 === cust2);
console.log('2', cust2);
console.log('3', cust3 === cust4);
console.log('4', cust4);
