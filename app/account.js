class Account {
  constructor(balance) {
    this.balance = balance;
  }

  // Deposit amount must be input as a positive number (float)
  deposit(amount) {
    this.balance.update(amount);
  }

  // Withdrawl amount must be input as a positive number (float)
  withdraw(amount) {
    // Convert amount into negative float
    this.balance.update(-Math.abs(amount));
  }
}

module.exports = Account;
