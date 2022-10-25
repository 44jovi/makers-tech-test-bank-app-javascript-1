class Account {
  constructor(balance, transactions) {
    this.balance = balance;
    this.transactions = transactions;
    this.statementHeader = "date || credit || debit || balance";
  }

  // Deposit amount must be input as a positive number (float)
  deposit(amount) {
    this.balance.update(amount);
    const date = new Date().toLocaleDateString("en-GB");
    this.transactions.add(date, amount);
  }

  // Withdrawl amount must be input as a positive number (float)
  withdraw(amount) {
    // If amount is positive, convert it to negative
    if (Math.sign(amount) === 1) {
      amount = -Math.abs(amount);
    }
    // If amount is negative or zero, leave it unchanged
    else if (Math.sign(amount) === -1) {
      amount = amount;
    }

    this.balance.update(amount);
    const date = new Date().toLocaleDateString("en-GB");
    this.transactions.add(date, amount);
  }

  printStatement() {
    let statement = this.statementHeader;

    // WIP: Fix Prettier auto-formatting here
    // Fix number outputs to 2 decimal places
    this.transactions.list().forEach((transaction) => {
      statement += `\n${
        transaction.transacDate
      } || ${transaction.credit.toFixed(2)} || ${transaction.debit.toFixed(
        2
      )} || ${transaction.accBalance.toFixed(2)}`;
    });

    return statement;
  }
}

module.exports = Account;
