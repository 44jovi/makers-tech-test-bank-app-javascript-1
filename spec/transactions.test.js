const Transactions = require("../app/transactions");

beforeEach(() => {
  transactions = new Transactions();
});

describe("Transactions", () => {
  describe("push transactions as key/value pairs to array with amount and date", () => {
    it("#list returns default message before any transacitons ", () => {
      expect(transactions.list()).toEqual("No transactions yet.");
    });

    it("#deposit pushes positive transaction(s) to array; #list returns array of transactions", () => {
      expect(transactions.list()).toEqual("No transactions yet.");

      transactions.deposit("01/01/2022", 1.0);
      transactions.deposit("02/01/2022", 2.0);

      expect(transactions.list()).toEqual([
        { "01/01/2022": 1.0 },
        { "02/01/2022": 2.0 },
      ]);
    });

    it("#withdraw pushes negative transaction(s) to array; #list returns array of transactions", () => {
      expect(transactions.list()).toEqual("No transactions yet.");

      // Withdrawl amount to be input as positive number (float)
      transactions.withdraw("01/01/2022", 1.0);
      transactions.withdraw("02/01/2022", 2.0);

      expect(transactions.list()).toEqual([
        { "01/01/2022": -1.0 },
        { "02/01/2022": -2.0 },
      ]);
    });

    // Add tests for invalid input
  });
});
