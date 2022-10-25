const Account = require("../app/account");
const Balance = require("../app/balance");
const Transactions = require("../app/transactions");

jest.mock("../app/balance");
jest.mock("../app/transactions");

beforeEach(() => {
  mockBalance = new Balance();
  mockTransactions = new Transactions();
  account = new Account(mockBalance, mockTransactions);
});

describe("Account", () => {
  describe("deposit()", () => {
    it("each execution adds an amount to account balance", () => {
      // Manual mock of `this.currentBalance` in the Balance class
      let mockCurrentBalance = 0.0;

      mockBalance.update.mockImplementation((amount) => {
        mockCurrentBalance += amount;
      });

      expect(mockCurrentBalance).toEqual(0.0);
      account.deposit(1.0);
      expect(mockCurrentBalance).toEqual(1.0);
      account.deposit(2.0);
      expect(mockCurrentBalance).toEqual(3.0);
    });
  });

  describe("withdraw()", () => {
    it("each execution subtracts an amount from account balance", () => {
      // Manual mock of `this.currentBalance` in the Balance class
      let mockCurrentBalance = 0.0;

      mockBalance.update.mockImplementation((amount) => {
        mockCurrentBalance += amount;
      });

      expect(mockCurrentBalance).toEqual(0.0);
      account.withdraw(1.0);
      expect(mockCurrentBalance).toEqual(-1.0);
      account.withdraw(2.0);
      expect(mockCurrentBalance).toEqual(-3.0);
    });
  });

  describe("printStatement", () => {
    it("prints statement showing transactions", () => {
      mockBalance = new Balance();
      mockTransactions = new Transactions();
      // Mock transactions
      mockTransactions.list.mockImplementation(() => [
        {
          transacDate: "10/01/2023",
          credit: 1000.0,
          debit: 0.0,
          accBalance: 1000.0,
        },
        {
          transacDate: "13/01/2023",
          credit: 2000.0,
          debit: 0.0,
          accBalance: 3000.0,
        },
        {
          transacDate: "14/01/2023",
          credit: 0.0,
          debit: 500.0,
          accBalance: 2500.0,
        },
      ]);
      account = new Account(mockBalance, mockTransactions);

      expect(account.printStatement()).toEqual(
        "date || credit || debit || balance\n10/01/2023 || 1000.00 || 0.00 || 1000.00\n13/01/2023 || 2000.00 || 0.00 || 3000.00\n14/01/2023 || 0.00 || 500.00 || 2500.00"
      );
    });
  });

  // Add tests for invalid input and error throws
});
