const Account = require("../app/account");
const Balance = require("../app/balance");

jest.mock("../app/balance");

beforeEach(() => {
  mockBalance = new Balance();
  account = new Account(mockBalance);
  // Balance.mockClear();
});

describe("Account", () => {
  describe("deposit()", () => {
    it("each execution adds an amount to account balance", () => {
      let mockCurrentBalance = 0.0;

      mockBalance.update.mockImplementation((amount) => {
        mockCurrentBalance += amount;
      });

      account.deposit(1.0);
      expect(mockCurrentBalance).toEqual(1.0);
      account.deposit(2.0);
      expect(mockCurrentBalance).toEqual(3.0);
    });
  });

  // Add tests for invalid input / errors
});
