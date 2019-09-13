"use strict";
const calculateTotalPrice = (arr, productName) => {
  let totalPrice = 0;
  for (const obj of arr) {
    obj["name"] == productName && (totalPrice = obj["price"] * obj["quantity"]);
  }
  return totalPrice;
};

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
