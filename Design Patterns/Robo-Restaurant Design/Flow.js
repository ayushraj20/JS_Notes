// Customer class
class Customer {
  constructor(id, tableNumber) {
    this.id = id;
    this.tableNumber = tableNumber;
    this.orderHistory = [];
  }

  placeOrder(order) {
    this.orderHistory.push(order);
    return order;
  }

  requestWater() {
    return { type: 'water', tableNumber: this.tableNumber };
  }
}

// Order class
class Order {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.itemsList = items;
    this.status = 'Pending'; // Status can be '|Pending |In-Kitchen |Ready |Delivered'
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// MenuItem class
class MenuItem {
  constructor(itemId, name, price) {
    this.itemId = itemId;
    this.name = name;
    this.price = price;
  }
}

// RobotWaiter class
class RobotWaiter {
  constructor(robotId) {
    this.robotId = robotId;
    this.isAvailable = true;
    this.currentTask = null;
  }

  takeOrder(order) {
    this.isAvailable = false;
    this.currentTask = order;
    console.log(
      `RobotWaiter ${this.robotId} is taking order ${order.orderId} to the kitchen.`
    );
  }

  serveOrder(order) {
    this.isAvailable = false;
    this.currentTask = order;
    console.log(
      `RobotWaiter ${this.robotId} is serving order ${order.orderId} to the table.`
    );
    this.isAvailable = true;
  }

  handleRequest(request) {
    console.log(
      `RobotWaiter ${this.robotId} is handling request for ${request.type} at table ${request.tableNumber}.`
    );
    this.isAvailable = true;
  }

  assignTask(task) {
    this.currentTask = task;
    this.isAvailable = false;
  }
}

// Scheduler class
class Scheduler {
  constructor() {
    this.taskQueue = [];
  }

  assignTask(robotWaiter, task) {
    if (robotWaiter.isAvailable) {
      robotWaiter.assignTask(task);
    } else {
      this.taskQueue.push(task);
    }
  }

  prioritizeTask(robotWaiter, task) {
    this.taskQueue.unshift({ robotWaiter, task }); // Adds the task at the beginning of the queue
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

// Kitchen Interface (3rd party system wrapper)
class Kitchen {
  static make(order) {
    console.log(`Order ${order.orderId} is being prepared in the kitchen.`);
    order.updateStatus('In Kitchen');
  }

  static isReady(order) {
    return order.status === 'Ready for Delivery';
  }

  static get(order) {
    console.log(`Order ${order.orderId} is ready for pickup.`);
    order.updateStatus('Ready for Delivery');
    return order;
  }
}

// Restaurant class
class Restaurant {
  constructor() {
    this.scheduler = new Scheduler();
    this.robotWaiters = [new RobotWaiter(1), new RobotWaiter(2)];
    this.currentOrders = [];
  }

  manageOrder(order) {
    const availableWaiter = this.robotWaiters.find(
      (waiter) => waiter.isAvailable
    );
    if (availableWaiter) {
      availableWaiter.takeOrder(order);
      Kitchen.make(order); // Send order to kitchen
      this.currentOrders.push(order);
    } else {
      this.scheduler.assignTask(availableWaiter, order);
    }
  }

  manageRequest(request) {
    const availableWaiter = this.robotWaiters.find(
      (waiter) => waiter.isAvailable
    );
    if (availableWaiter) {
      availableWaiter.handleRequest(request);
    } else {
      this.scheduler.prioritizeTask(availableWaiter, request);
    }
  }

  checkKitchenStatus() {
    this.currentOrders.forEach((order) => {
      if (Kitchen.isReady(order)) {
        const availableWaiter = this.robotWaiters.find(
          (waiter) => waiter.isAvailable
        );
        if (availableWaiter) {
          Kitchen.get(order);
          availableWaiter.serveOrder(order);
        } else {
          this.scheduler.assignTask(availableWaiter, order);
        }
      }
    });
    this.scheduler.checkTaskQueue(); // Re-evaluate tasks in queue
  }
}

// Example Usage
const restaurant = new Restaurant();
const customer1 = new Customer(1, 5);
const customer2 = new Customer(2, 6);

const item1 = new MenuItem(1, 'Pasta', 12.99);
const item2 = new MenuItem(2, 'Salad', 6.99);

const order1 = new Order(1, [item1, item2]);
const order2 = new Order(2, [item1]);

// Customer places orders
restaurant.manageOrder(order1);
restaurant.manageOrder(order2);

// Check if any orders are ready and assign tasks as necessary
restaurant.checkKitchenStatus();

// Customer requests water
const waterRequest1 = customer1.requestWater();
restaurant.manageRequest(waterRequest1);

const waterRequest2 = customer2.requestWater();
restaurant.manageRequest(waterRequest2);

// Re-check kitchen status to process any ready orders or requests
restaurant.checkKitchenStatus();
