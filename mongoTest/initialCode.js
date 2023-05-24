const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Store")
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((error) => console.error("Connection error", error));

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    orderId: Number,
    customerName: String,
    item: String,
    quantity: Number,
    price: Number,
  })
);

async function createOrders() {
  const ordersData = [
    {
      orderId: 1,
      customerName: "John Doe",
      item: "Shoes",
      quantity: 2,
      price: 50,
    },
    {
      orderId: 2,
      customerName: "Jane Doe",
      item: "Shirt",
      quantity: 1,
      price: 20,
    },
    { orderId: 3, customerName: "Alice", item: "Bag", quantity: 3, price: 35 },
    { orderId: 4, customerName: "Bob", item: "Shoes", quantity: 1, price: 50 },
    {
      orderId: 5,
      customerName: "Charlie",
      item: "Pants",
      quantity: 2,
      price: 40,
    },
    {
      orderId: 6,
      customerName: "David",
      item: "Shoes",
      quantity: 4,
      price: 50,
    },
    { orderId: 7, customerName: "Eve", item: "Shirt", quantity: 1, price: 20 },
    { orderId: 8, customerName: "Frank", item: "Bag", quantity: 5, price: 35 },
    {
      orderId: 9,
      customerName: "Grace",
      item: "Shoes",
      quantity: 1,
      price: 50,
    },
    {
      orderId: 10,
      customerName: "Heidi",
      item: "Pants",
      quantity: 2,
      price: 40,
    },
  ];

  for (let data of ordersData) {
    const order = new Order(data);
    await order.save();
  }
}

module.exports.Order = Order;
module.exports.createOrders = createOrders;
