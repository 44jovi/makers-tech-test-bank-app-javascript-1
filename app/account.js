const Balance = require("./balance");

class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance.update(amount);
  }
}

module.exports = Account;
