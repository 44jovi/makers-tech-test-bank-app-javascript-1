const Account = require("../../app/account");
const Balance = require("../../app/balance");
const Transactions = require("../../app/transactions");

const balance = new Balance();
const transactions = new Transactions(balance);
const account = new Account(balance, transactions);

beforeEach(() => {
  balance.currentBalance = 0;
});

describe("Integration tests", () => {
  it("make deposits/withdrawls and balance updates correctly", () => {
    account.deposit(100);
    expect(account.balance.currentBalance).toEqual(100);
    account.withdraw(50);
    expect(account.balance.currentBalance).toEqual(50);
  });

  it("withdrawls updates balance correctly regardless of positive or negative input", () => {
    account.deposit(100);
    expect(account.balance.currentBalance).toEqual(100);
    // Compare this to test above where positive amount was used for withdraw()
    account.withdraw(-50);
    expect(account.balance.currentBalance).toEqual(50);
  });

  it("withdrawls can make balance go to zero or negative", () => {
    account.deposit(100);
    expect(account.balance.currentBalance).toEqual(100);
    account.withdraw(100);
    expect(account.balance.currentBalance).toEqual(0);
    account.withdraw(100);
    expect(account.balance.currentBalance).toEqual(-100);
  });

  it("statement can be printed after transactions", () => {
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    expect(account.printStatement()).toContain(
      "date || credit || debit || balance"
    );
    // Contains transaction 1 (deposit)
    expect(account.printStatement()).toContain("1000.00");
    // Contains transaction 2 (deposit)
    expect(account.printStatement()).toContain("2000.00");
    // Contains balance after transaction 2
    expect(account.printStatement()).toContain("3000.00");
    // Contains transaction 3 (withdrawl)
    expect(account.printStatement()).toContain("500.00");
    // Contains balance after transaction 3
    expect(account.printStatement()).toContain("2500.00");
  });

  // For more specific testing of `account.printStatement()`,
  // refer to unit tests for Account class
});
