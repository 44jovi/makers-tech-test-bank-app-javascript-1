class Transactions {
  constructor(balance) {
    this.transactionsList = [];
    this.balance = balance.get();
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
    transactionDetails["transacDate"] = date;
    transactionDetails["transacAmount"] = transaction;
    transactionDetails["accBalance"] = this.balance;
    this.transactionsList.push(transactionDetails);
  }
}

module.exports = Transactions;
