// Menu class
class Menu {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Order Class
class Order {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.itemsList = items; // List of MenuItem instances
    this.status = 'Pending'; // Status can be '|Pending |In-Kitchen |Ready |Delivered'
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }

  calculateTotal() {
    return this.itemsList.reduce((total, item) => total + item.price, 0);
  }
}

// Customer Class - Encapsulates customer interactions and history
class Customer {
  constructor(id, tableNumber) {
    this.id = id;
    this.tableNumber = tableNumber;
    this.orderHistory = [];
  }

  placeOrder(items) {
    const order = new Order(Date.now(), items); // Unique order ID based on timestamp
    this.orderHistory.push(order);
    return order;
  }

  requestItem(item) {
    console.log(`Customer at table ${this.tableNumber} requests ${item}.`);
    return { type: item, tableNumber: this.tableNumber };
  }
}

// Waiter Interface - Abstract class for common waiter functionality
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

// RobotWaiter Class - Inherits from Waiter
class RobotWaiter extends Waiter {
  constructor(id) {
    super(id);
  }

  // Overridden method to handle a specific task type
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

  // Delivers an order
  deliverOrder(order) {
    console.log(
      `RobotWaiter ${this.id} is delivering Order ${order.orderId} to table.`
    );
  }

  // Delivers water to a table
  deliverWater(tableNumber) {
    console.log(
      `RobotWaiter ${this.id} is delivering water to table ${tableNumber}.`
    );
  }
}

// Scheduler Class - Manages task allocation for robot waiters
class Scheduler {
  constructor() {
    this.taskQueue = [];
  }

  // Add a task to the queue if no waiter is available
  assignTask(robotWaiters, task) {
    const availableWaiter = robotWaiters.find((waiter) => waiter.isAvailable);
    if (availableWaiter) {
      availableWaiter.assignTask(task);
    } else {
      console.log(`Task added to queue: ${task.type}`);
      this.taskQueue.push(task);
    }
  }

  // Processes queued tasks when waiters become available
  processTaskQueue(robotWaiters) {
    robotWaiters.forEach((waiter) => {
      if (waiter.isAvailable && this.taskQueue.length > 0) {
        const nextTask = this.taskQueue.shift();
        waiter.assignTask(nextTask);
      }
    });
  }
}

// Kitchen Module - Interfaces with the third-party kitchen
class Kitchen {
  static makeOrder(order) {
    console.log(`Order ${order.orderId} sent to kitchen.`);
    order.updateStatus('In Kitchen');
  }

  static isOrderReady(order) {
    // Placeholder for checking order readiness (simulated as always ready for simplicity)
    return order.status === 'Ready for Delivery';
  }

  static getOrder(order) {
    console.log(`Order ${order.orderId} is ready for pickup.`);
    order.updateStatus('Ready for Delivery');
    return order;
  }
}

// Restaurant Class - Main controller for coordinating the restaurant's operations
class Restaurant {
  constructor() {
    this.scheduler = new Scheduler();
    this.robotWaiters = [new RobotWaiter(1), new RobotWaiter(2)];
    this.customers = [];
    this.activeOrders = [];
  }

  // Adds a new customer
  addCustomer(customer) {
    this.customers.push(customer);
  }

  // Manages an order placed by a customer
  manageOrder(customer, items) {
    const order = customer.placeOrder(items);
    this.activeOrders.push(order);
    Kitchen.makeOrder(order);
  }

  // Checks the status of orders in the kitchen and assigns waiters if ready
  checkKitchenStatus() {
    this.activeOrders.forEach((order) => {
      if (Kitchen.isOrderReady(order)) {
        Kitchen.getOrder(order);
        const deliveryTask = { type: 'delivery', order: order };
        this.scheduler.assignTask(this.robotWaiters, deliveryTask);
      }
    });
    this.scheduler.processTaskQueue(this.robotWaiters);
  }

  // Handles additional customer requests (e.g., water)
  handleRequest(customer, item) {
    const requestTask = customer.requestItem(item);
    this.scheduler.assignTask(this.robotWaiters, requestTask);
  }
}

// Example Usage
const restaurant = new Restaurant();
const customer1 = new Customer(1, 5);
const customer2 = new Customer(2, 6);

// Add customers to restaurant
restaurant.addCustomer(customer1);
restaurant.addCustomer(customer2);

// Customer places orders
const items = [new MenuItem(1, 'Pasta', 12.99), new MenuItem(2, 'Salad', 6.99)];
restaurant.manageOrder(customer1, items);
restaurant.manageOrder(customer2, [new MenuItem(3, 'Pizza', 9.99)]);

// Process kitchen orders
restaurant.checkKitchenStatus();

// Customer requests water
restaurant.handleRequest(customer1, 'water');
restaurant.handleRequest(customer2, 'water');

// Check for any remaining queued tasks
restaurant.checkKitchenStatus();
