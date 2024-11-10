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
var Customer = /** @class */ (function () {
    function Customer(name, id, tableNo) {
        console.log('inside constructor');
        // this.name = name;
        // this.id = id;
        // this.tableNo = tableNo ?? null;
        // groupSize;
        // orderId;
    }
    Customer.getInstance = function () {
        if (!Customer.instance) {
            Customer.instance = new Customer(1, 2, 3);
        }
        return Customer.instance;
    };
    Customer.instance = null;
    return Customer;
}());
var cust1 = Customer.getInstance();
var cust2 = Customer.getInstance();
var cust3 = new Customer(1, 2, 3);
var cust4 = new Customer(1, 2, 3);
console.log('1', cust1 === cust2);
console.log('2', cust2);
console.log('3', cust3 === cust4);
console.log('4', cust4);
