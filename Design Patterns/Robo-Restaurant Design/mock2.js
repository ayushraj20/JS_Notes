// Customer, Table, Menu, Order, RobotWaiter, Kitchen, Scheduler, Restaurant.

class Menu {
  constructor() {
    // itemId
    // itemName
    // itemPrice
  }
}

class Order {
  constructor() {
    // orderId
    // items []
    // tableNo
    // customerId
  }
}

class Table {
  constructor() {
    // tableId
    // capacity
    // isOccupied
    // custId
  }
}

class Customer {
  constructor() {
    // custId
    // cusName
    // tableNo
    // orderId
    // groupOf
  }
}

class Task {
  constructor() {
    // tableId
    // type: 'takeOrder' 'ServeOrder' 'otherReq'
  }
}

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
    Scheduler.assignTask(robotWaiters, serveOrder);

    return order;
  }
}

class Restaurant {
  constructor() {
    // tables []
    // robotWaiters []
  }

  assignTables(customer) {
    const table = tables.find(
      (table) => !table.isOccupied && customer.groupSize <= table.capacity
    );
    table.cusId = customer.cusId;
    isOccupied;

    const newTask = newTask(tableNo, takeOrder);

    if (table) {
      Scheduler.assignTask(robotWaiters, task);
    }
  }
}

// Scheduler - Singleton
class Scheduler {
  static instance;
  constructor() {
    this.taskQueue = [];
    Scheduler.instance = this;
  }

  static getInstance() {
    if (!Scheduler.instance) {
      Scheduler.instance = new Scheduler();
    }
    return Scheduler.instance;
  }

  assignTask(robotWaiters, task) {
    const robotWaiter = robotWaiters.find((waiter) => waiter.isAvailable);
    if (robotWaiter) {
      robotWaiter.assignTask();
    } else {
      this.taskQueue.push(task);
    }
  }

  processTaskQueue() {
    if (taskQ.lenght > 0) {
      const nextTask = this.taskQueue.unshift;
      // assignTask(robotWaiters,nextTask)
    }
  }
}

class RobotWaiter {
  constructor() {
    // robotId;
    // isAvailable;
    // batteryPercentage;
    // currentTask[]
  }

  takeOrder(tableNo) {
    Kitchen.make(order);
  }

  serveOrder(tableNo) {
    order.status = delivered;
    Scheduler.processTaskQueue();
  }

  assignTask() {
    // takeOrder
    // serveOrder
  }
}
