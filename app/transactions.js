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
}

module.exports = Transactions;
