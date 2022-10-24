class Transactions {
  constructor() {
    this.transactionsList = [];
  }

  list() {
    if (this.transactionsList.length === 0) {
      return "No transactions yet.";
    }
    return this.transactionsList;
  }

  deposit(date, amount) {
    const transaction = {};
    transaction[date] = amount;
    this.transactionsList.push(transaction);
  }

  withdraw(date, amount) {
    const transaction = {};
    transaction[date] = amount;
    this.transactionsList.push(transaction);
  }
}

module.exports = Transactions;
