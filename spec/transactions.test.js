const Transactions = require("../app/transactions");
const Balance = require("../app/balance");

jest.mock("../app/balance");

beforeEach(() => {
  Balance.mockClear();
});

describe("Transactions", () => {
  describe("add() adds a transaction to array", () => {
    it("add multiple transactions", () => {
      const mockBalance = new Balance();
      mockBalance.get.mockImplementation(() => 0.0);
      transactions = new Transactions(mockBalance);

      // Future improvements: use Date object and manually mock Account methods

      // Transaction 1 (deposit)
      const date1 = "01/01/2022";
      const transaction1 = 1.1;
      transactions.add(date1, transaction1);

      // Transaction 2 (deposit)
      const date2 = "02/01/2022";
      const transaction2 = 2.2;
      transactions.add(date2, transaction2);

      // Transaction 3 (withdrawl)
      const date3 = "03/01/2022";
      const transaction3 = -3.3;
      transactions.add(date3, transaction3);

      expect(transactions.list()).toEqual([
        // `accBalance` has a mock value, hard-coded as `0.0`
        // Only asserting that add() correctly calls on instance variable `this.balance`
        { transacDate: "01/01/2022", credit: 1.1, debit: 0.0, accBalance: 0.0 },
        { transacDate: "02/01/2022", credit: 2.2, debit: 0.0, accBalance: 0.0 },
        { transacDate: "03/01/2022", credit: 0.0, debit: 3.3, accBalance: 0.0 },
      ]);
    });

    // Add tests for invalid input / error throws
  });
  describe("list() returns array of transactions", () => {
    it("default message before any transactions", () => {
      const mockBalance = new Balance();
      mockBalance.get.mockImplementation(() => 0.0);
      transactions = new Transactions(mockBalance);

      expect(transactions.list()).toEqual("No transactions yet.");
    });

    // Add tests for invalid input / error throws
  });
});
