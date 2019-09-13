"use strict";
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const TRANSACTION_DEPOSIT = {
      id: this.transactions.length + 1,
      type: Transaction.DEPOSIT,
      amount: amount
    };
    this.addTransaction(TRANSACTION_DEPOSIT);
    this.balance = this.balance + amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      const TRANSACTION_WITHDRAW = {
        id: this.transactions.length + 1,
        type: Transaction.WITHDRAW,
        amount: amount
      };
      this.addTransaction(TRANSACTION_WITHDRAW);
      this.balance = this.balance - amount;
    } else {
      alert("Not enough money");
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log("Balance:", this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    id = Number(id);
    if (id <= this.transactions.length && id > 0) {
      for (const element of this.transactions) {
        if (element.id === id) {
          return element;
          break;
        }
      }
    } else {
      if (id !== 0) {
        return alert("Id does not exist");
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    if (type === "withdraw" || type === "deposit") {
      let sum = 0;

      for (const element of this.transactions) {
        element.type === type && (sum = sum + element.amount);
      }
      return sum;
    } else {
      return "not exist";
    }
  }
};
let operation;
let choice;
do {
  choice = prompt("Choose transaction(r-replenish/w-withdraw");
  if (choice === "r" || choice === "w") {
    operation = prompt("Enter a sum");
    // if (operation !== null) {
    if (operation > 0) {
      if (choice === "r") {
        account.deposit(Number(operation));
      } else account.withdraw(Number(operation));
    } else {
      alert("Enter correct sum");
    }
    // }
  } else {
    choice === null || alert("Enter correct transaction");
  }
} while (choice !== null && operation !== null);
account.getBalance();
console.log(account.transactions);
console.log("Object of id transaction:");
console.log(account.getTransactionDetails(prompt("Input number transaction")));
console.log("Sum of transaction:");
console.log(
  account.getTransactionTotal(prompt("Enter transaction type for sum"))
);
