class Balance {
  constructor() {
    this.currentBalance = 0.0;
  }

  get() {
    return this.currentBalance;
  }

  update(amount) {
    this.currentBalance += amount;
  }
}

module.exports = Balance;
