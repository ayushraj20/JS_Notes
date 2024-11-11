class MenuItemFactory {
  static createMenuItem(id, name, price) {
    return new MenuItem(id, name, price);
  }
}

class MenuItem {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getDescription() {
    return `${this.name} - $${this.price}`;
  }
}

class Order {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.itemsList = items;
    this.status = 'Pending';
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }

  calculateTotal() {
    return this.itemsList.reduce((total, item) => total + item.price, 0);
  }
}

class CustomerFactory {
  static createCustomer(id, tableNumber) {
    return new Customer(id, tableNumber);
  }
}

class Customer {
  constructor(id, tableNumber) {
    this.id = id;
    this.tableNumber = tableNumber;
    this.orderHistory = [];
  }

  placeOrder(items) {
    const order = new Order(Date.now(), items);
    this.orderHistory.push(order);
    return order;
  }

  requestItem(item) {
    console.log(`Customer at table ${this.tableNumber} requests ${item}.`);
    return { type: item, tableNumber: this.tableNumber };
  }
}

class Scheduler {
  static #instance;

  constructor() {
    this.taskQueue = [];
  }

  static getInstance() {
    if (!Scheduler.#instance) {
      Scheduler.#instance = new Scheduler();
    }
    return Scheduler.#instance;
  }

  assignTask(robotWaiters, task) {
    const availableWaiter = robotWaiters.find((waiter) => waiter.isAvailable);
    if (availableWaiter) {
      availableWaiter.assignTask(task);
    } else {
      console.log(`Task added to queue: ${task.type}`);
      this.taskQueue.push(task);
    }
  }

  processTaskQueue(robotWaiters) {
    robotWaiters.forEach((waiter) => {
      if (waiter.isAvailable && this.taskQueue.length > 0) {
        const nextTask = this.taskQueue.shift();
        waiter.assignTask(nextTask);
      }
    });
  }
}

class Waiter {
  constructor(id) {
    if (new.target === Waiter) {
      throw new TypeError('Cannot instantiate abstract class Waiter directly.');
    }
    this.id = id;
    this.isAvailable = true;
    this.currentTask = null;
  }

  assignTask(task) {
    this.isAvailable = false;
    this.currentTask = task;
  }

  completeTask() {
    console.log(`Waiter ${this.id} completed the task: ${this.currentTask}`);
    this.isAvailable = true;
    this.currentTask = null;
  }
}

class RobotWaiter extends Waiter {
  constructor(id) {
    super(id);
  }

  assignTask(task) {
    super.assignTask(task);
    console.log(`RobotWaiter ${this.id} is handling task: ${task.type}`);
    if (task.type === 'delivery') {
      this.deliverOrder(task.order);
    } else if (task.type === 'water') {
      this.deliverWater(task.tableNumber);
    }
    this.completeTask();
  }

  deliverOrder(order) {
    console.log(
      `RobotWaiter ${this.id} is delivering Order ${order.orderId} to table.`
    );
  }

  deliverWater(tableNumber) {
    console.log(
      `RobotWaiter ${this.id} is delivering water to table ${tableNumber}.`
    );
  }
}

class RobotFactory {
  static robotId = 1;

  static createRobotWaiter() {
    const robot = new RobotWaiter(RobotFactory.robotId++);
    console.log(`RobotWaiter ${robot.id} created.`);
    return robot;
  }
}

class Kitchen {
  static makeOrder(order) {
    console.log(`Order ${order.orderId} sent to kitchen.`);
    order.updateStatus('In Kitchen');
  }

  static isOrderReady(order) {
    return order.status === 'Ready for Delivery';
  }

  static getOrder(order) {
    console.log(`Order ${order.orderId} is ready for pickup.`);
    order.updateStatus('Ready for Delivery');
    return order;
  }
}

class Restaurant {
  static #instance;

  #scheduler;
  #robotWaiters;
  #customers;
  #activeOrders;

  constructor() {
    if (Restaurant.#instance) {
      throw new Error(
        'Restaurant is a singleton and cannot be instantiated more than once.'
      );
    }

    this.#scheduler = Scheduler.getInstance();
    this.#robotWaiters = [
      RobotFactory.createRobotWaiter(),
      RobotFactory.createRobotWaiter(),
    ];
    this.#customers = [];
    this.#activeOrders = [];
  }

  static getInstance() {
    if (!Restaurant.#instance) {
      Restaurant.#instance = new Restaurant();
    }
    return Restaurant.#instance;
  }

  addCustomer(customer) {
    this.#customers.push(customer);
  }

  manageOrder(customer, items) {
    const order = customer.placeOrder(items);
    this.#activeOrders.push(order);
    Kitchen.makeOrder(order);
  }

  checkKitchenStatus() {
    this.#activeOrders.forEach((order) => {
      if (Kitchen.isOrderReady(order)) {
        Kitchen.getOrder(order);
        const deliveryTask = { type: 'delivery', order: order };
        this.#scheduler.assignTask(this.#robotWaiters, deliveryTask);
      }
    });
    this.#scheduler.processTaskQueue(this.#robotWaiters);
  }

  handleRequest(customer, item) {
    const requestTask = customer.requestItem(item);
    this.#scheduler.assignTask(this.#robotWaiters, requestTask);
  }
}

// Example Usage
const restaurant = Restaurant.getInstance();
const customer1 = CustomerFactory.createCustomer(1, 5);
const customer2 = CustomerFactory.createCustomer(2, 6);

// Add customers to restaurant
restaurant.addCustomer(customer1);
restaurant.addCustomer(customer2);

// Customer places orders
const items = [
  MenuItemFactory.createMenuItem(1, 'Pasta', 12.99),
  MenuItemFactory.createMenuItem(2, 'Salad', 6.99),
];
restaurant.manageOrder(customer1, items);
restaurant.manageOrder(customer2, [
  MenuItemFactory.createMenuItem(3, 'Pizza', 9.99),
]);

// Process kitchen orders
restaurant.checkKitchenStatus();

// Customer requests water
restaurant.handleRequest(customer1, 'water');
restaurant.handleRequest(customer2, 'water');

// Check for remaining queued tasks
restaurant.checkKitchenStatus();
