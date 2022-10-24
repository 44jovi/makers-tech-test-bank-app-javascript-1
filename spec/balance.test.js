const Balance = require("../app/balance");

beforeEach(() => {
  balance = new Balance();
});

describe("Balance", () => {
  describe("#current returns a bank account's current balance", () => {
    it("default balance before any transactions", () => {
      expect(balance.getCurrentBalance()).toEqual(0.0);
    });
  });
});
