// Customer, Menu, Order, RobotWaiter, Kitchen, Scheduler, Restaurant.

class Menu {
  constructor(itemId, itemName, itemPrice) {
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
  }
}

class Customer {
  constructor() {
    this.id = id;
    this.tableNo = this.tableNo;
    this.orderHistory = [];
  }

  placeOrder(items) {
    this.orderHistory.push(items);
  }
}

class Order {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.items = [...items];
    this.orderStatus = null; // 'Pending/In-Kitchen/Ready/Delivered'
  }

  updateStatus(status) {
    this.orderStatus = status;
  }
}

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

class RobotWaiter {
  constructor(id) {
    this.Id = Id;
    this.currentTask = null;
    this.isAvailable = true;
  }

  takeOrder(order) {
    this.isAvailable = false;
    this.currentTask = order;
    this.isAvailable = true;
  }

  serveOrder(order) {
    this.isAvailable = false;
    this.currentTask = order;
    this.isAvailable = true;
  }

  assignTask(task) {
    if (this.isAvailable) {
      this.currentTask = task;
    }
  }
}

class Scheduler {
  constructor() {
    taskQueue = [];
  }

  assignTask(robotWaiters, task) {
    const availableWaiter = robotWaiters.find((waiter) => waiter.isAvailable);
    if (availableWaiter) {
      availableWaiter.assignTask(task);
    } else {
      this.taskQueue.push(task);
    }
  }

  processTaskQueue(robotWaiters) {
    const availableWaiter = robotWaiters.find((waiter) => waiter.isAvailable);
    if (availableWaiter && taskQueue.length > 0) {
      const newTask = this.taskQueue.shift();
      availableWaiter.assignTask(newTask);
    }
  }
}

class Restaurant {
  constructor() {
    this.scheduler = new Scheduler();
    this.robotWaiters = [new RobotWaiter(1), new RobotWaiter(2)];
    this.activeOrders = [];
  }

  manageOrders() {}
}
