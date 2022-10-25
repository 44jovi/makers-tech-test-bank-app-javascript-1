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

  add(date, transaction) {
    const transactionDetails = {};

    transactionDetails["transacDate"] = date;

    // If transaction is positive (deposit)
    if (Math.sign(transaction) === 1) {
      transactionDetails["credit"] = transaction;
      transactionDetails["debit"] = 0.0;
    }
    // Otherwise if transaction is negative (withdrawl)
    else if (Math.sign(transaction) === -1) {
      transactionDetails["credit"] = 0.0;
      // Convert transaction value back into positive number
      transactionDetails["debit"] = Math.abs(transaction);
    }

    transactionDetails["accBalance"] = this.balance;

    this.transactionsList.push(transactionDetails);
  }
}

module.exports = Transactions;
