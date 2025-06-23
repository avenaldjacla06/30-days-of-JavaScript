const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [
    { description: 'Job', amount: 5000 },
    { description: 'Freelance', amount: 1500 }
  ],
  expenses: [
    { description: 'Rent', amount: 1000 },
    { description: 'Groceries', amount: 300 }
  ],
  totalIncome() {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0);
  },
  totalExpense() {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  },
  accountInfo() {
    return `${this.firstName} ${this.lastName} has ${this.totalIncome()} income and ${this.totalExpense()} expense.`;
  },
  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};
