const Transactions = require("../app/transaction");

describe("Transactions", () => {
  // Use beforeEach for repeated actions

  describe("push transactions as key/value pairs to array with amount and date", () => {
    it("#deposit adds deposit transactions", () => {
      const transactions = new Transactions();

      expect(transactions.list()).toEqual("No transactions yet.");

      transactions.deposit("01/01/2022", 1.0);
      transactions.deposit("02/01/2022", 2.0);

      expect(transactions.list()).toEqual([
        { "01/01/2022": 1.0 },
        { "02/01/2022": 2.0 },
      ]);
    });
  });
});
