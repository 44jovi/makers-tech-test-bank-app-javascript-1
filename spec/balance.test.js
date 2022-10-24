const Balance = require("../app/balance");

beforeEach(() => {
  balance = new Balance();
});

describe("Balance", () => {
  describe("#getBalance returns a bank account's current balance", () => {
    it("default balance before any transactions", () => {
      expect(balance.current()).toEqual(0.0);
    });

    // Add tests for invalid input
  });
});
