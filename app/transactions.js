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

  // Include balance
  add(date, transaction) {
    const transactionDetails = {};
    transactionDetails[date] = transaction;
    this.transactionsList.push(transactionDetails);
  }
}

module.exports = Transactions;
