const Balance = require("../app/balance");

beforeEach(() => {
  balance = new Balance();
});

describe("Balance", () => {
  describe("get() returns current account balance", () => {
    it("default balance is zero", () => {
      expect(balance.get()).toEqual(0.0);
    });
  });

  describe("update() updates current account balance", () => {
    it("add/subtract an amount from current balance (positive balance)", () => {
      balance.update(3.0);
      expect(balance.get()).toEqual(3.0);
      balance.update(-2.0);
      expect(balance.get()).toEqual(1.0);
    });

    it("add/subtract an amount from current balance (negative balance)", () => {
      balance.update(3.0);
      expect(balance.get()).toEqual(3.0);
      balance.update(-4.0);
      expect(balance.get()).toEqual(-1.0);
    });
  });

  // Add tests for invalid input
});
