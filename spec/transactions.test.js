const Transactions = require("../app/transactions");

beforeEach(() => {
  transactions = new Transactions();
});

describe("Transactions", () => {
  describe("list() returns array of transactions", () => {
    it("default message when before any transactions", () => {
      expect(transactions.list()).toEqual("No transactions yet.");
    });

    // Add tests for invalid input
  });
});
