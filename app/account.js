class Account {
  constructor(balance, transactions) {
    this.balance = balance;
    this.transactionsList = transactions.list();
    this.statementHeader = "date || credit || debit || balance";
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

  printStatement() {
    let statement = this.statementHeader;

    // WIP: Fix Prettier auto-formatting here
    // Fix number outputs to 2 decimal places
    this.transactionsList.forEach((transaction) => {
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
