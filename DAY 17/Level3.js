// ===== Level 3 =====
// Create personAccount object with full methods
const personAccount = {
  firstName: 'Avenald',
  lastName: 'Jacla',
  incomes: [
    { description: 'Salary', amount: 30000 },
    { description: 'Freelance', amount: 10000 }
  ],
  expenses: [
    { description: 'Rent', amount: 8000 },
    { description: 'Groceries', amount: 4000 }
  ],

  totalIncome() {
    return this.incomes.reduce((acc, income) => acc + income.amount, 0);
  },

  totalExpense() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  },

  accountInfo() {
    return `${this.firstName} ${this.lastName}\nTotal Income: ₱${this.totalIncome()}\nTotal Expense: ₱${this.totalExpense()}`;
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

// Use methods (example)
personAccount.addIncome('Bonus', 5000);
personAccount.addExpense('Electric Bill', 2000);

// Log the final result
console.log(personAccount.accountInfo());
co
