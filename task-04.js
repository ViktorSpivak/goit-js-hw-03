"use strict";
const countTotalSalary = employees => {
  let sumSalary = 0;
  for (const key in employees) {
    sumSalary = sumSalary + employees[key];
  }
  return sumSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
