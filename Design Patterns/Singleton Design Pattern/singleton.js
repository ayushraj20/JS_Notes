let instance;

class ShoppingCart {
  constructor() {
    if (instance) {
      throw new Error('Instance already exists');
    }
    instance = this;
    this.cart = [];
  }

  addItem(item) {
    this.cart.push(item);
  }

  getItems() {
    console.log(this.cart);
  }
}

const singletonCart = Object.freeze(new ShoppingCart());

export default singletonCart;
