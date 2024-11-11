// // customer, table, menu , order, robotWaiter, scheduler, restaurant

// class Item {
//   constructor(id, name, price) {
//     //initialize
//   }
// }
// class Menu {
//   private items: Item[];
//   constructor(item: Item) {
//     this.items.push(item);
//   }
// }

// class Customer {
//   static instance: null | Customer = null;
//   private constructor(name, id, tableNo) {
//     // this.name = name;
//     // this.id = id;
//     // this.tableNo = tableNo ?? null;
//     // groupSize
//     // orderId
//   }

//   getInstance() {
//     if (!Customer.instance) {
//       Customer.instance = new Customer(1, 2, 3);
//     }
//     return Customer.instance;
//   }
// }

// const singletonCustomer = Object.freeze(new Customer(args));
// export default singletonCustomer;

// class Table {
//   private tableNo: number;
//   private isOccupied: boolean;

//   constructor(tableNo, isOccupied) {
//     this.tableNo = tableNo;
//     this.isOccupied = isOccupied;
//     //this.customerid = ID
//     // capacity;
//   }

//   // assignTable(id){
//   //   if(this.isOccupied)
//   // }
// }

// class Order {
//   // constructor(){
//   //   orderID = uuiD(v4)
//   //   items[];
//   //   status; Pending, in-kitchn, ready, delivered
//   //   tableId;
//   // }
//   // addItem()
// }

// class RobotWaiter {
//   // constructor(){
//   //   id;
//   //   isAvailable;
//   //   currentTask;
//   // }
//   // takeOrder(custId,items){
//   // const order = New Order(items,status,cust.tablleID)
//   // kitcehn.send(order)
//   // order.status = in-kitchn
//   // }
//   // serverOrder(){
//   //}
//   // assignTask()
// }

// class Scheduler {
//   // Singleton Class
//   // singleton
//   // constructor(){
//   //   taskQueue[]
//   // }
//   // assignTask(){
//   // const robotWaiter =
//   // if(ron==null)
//   // }
//   // processTaskQ(){
//   //}
// }

// class Restaurant {
//   constructor() {
//     // new Scheduler
//     // robotWaiters[];
//     // tableList.sorted(capacity) []
//   }

//   // assignTable(cust) {
//   //   const table = tableList.find((table) => !table.isOccupied && custom.groupsize <= table.capacity);
//   //   table.assignTable(custId);
//   //   table.get();
//   //   table.set();
//   // }

//   // assignTask(oder){
//   // assignTask(robotwaiters[])
//   // }
// }
