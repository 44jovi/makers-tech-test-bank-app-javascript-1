const Transactions = require("../app/transactions");

beforeEach(() => {
  transactions = new Transactions();
});

describe("Transactions", () => {
  describe("add() adds a transaction to array", () => {
    it("default message before any transactions", () => {
      expect(transactions.list()).toEqual("No transactions yet.");

      // Future improvements: use Date object
      const date = "01/01/2022";
      // Future improvements: change to manual mock of `account.deposit()` or `account.withdraw()`
      const transaction = 1.0;

      transactions.add(date, transaction);

      expect(transactions.list()).toEqual([{ "01/01/2022": 1.0 }]);

      // Return balance
    });

    // Add tests for invalid input
  });
  describe("list() returns array of transactions", () => {
    it("default message before any transactions", () => {
      expect(transactions.list()).toEqual("No transactions yet.");
    });

    // Add tests for invalid input
  });
});
