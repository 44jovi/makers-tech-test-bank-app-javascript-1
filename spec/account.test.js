const Account = require("../app/account");
const Balance = require("../app/balance");

jest.mock("../app/balance");

beforeEach(() => {
  mockBalance = new Balance();
  account = new Account(mockBalance);
});

describe("Account", () => {
  describe("deposit()", () => {
    it("each execution adds an amount to account balance", () => {
      // For now mimic the instance variable `this.currentBalance` in the Balance class
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
      // For now mimic the instance variable `this.currentBalance` in the Balance class
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

  // Add tests for printing statement

  // Add tests for invalid input and error throws for all methods
});
