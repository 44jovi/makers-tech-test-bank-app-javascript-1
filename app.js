const Account = require("./app/account");
const Balance = require("./app/balance");
const Transactions = require("./app/transactions");

const balance = new Balance();
const transactions = new Transactions(balance);
const account = new Account(balance, transactions);

// Run this script file using Node

const horizLine = () => {
  console.log("=============================================");
};

horizLine();

console.log("Hello!");

horizLine();

console.log("Deposit: 1000");
account.deposit(1000);
console.log("Statement:");
console.log(account.printStatement());

horizLine();

console.log("Withdrawl: 500");
account.withdraw(500);
console.log("Statement:");
console.log(account.printStatement());

horizLine();

console.log("Deposit: 250");
account.deposit(250);
console.log("Statement:");
console.log(account.printStatement());

horizLine();

console.log("Withdrawl: 750");
account.withdraw(750);
console.log("Statement:");
console.log(account.printStatement());

horizLine();
