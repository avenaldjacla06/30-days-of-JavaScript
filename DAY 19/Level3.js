 function personAccount(firstName, lastName) {
  let incomes = [];
  let expenses = [];

  function addIncome(description, amount) {
    incomes.push({ description, amount });
  }

  function addExpense(description, amount) {
    expenses.push({ description, amount });
  }

  function totalIncome() {
    return incomes.reduce((acc, item) => acc + item.amount, 0);
  }

  function totalExpense() {
    return expenses.reduce((acc, item) => acc + item.amount, 0);
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  function accountInfo() {
    return `${firstName} ${lastName} | Income: ₱${totalIncome()} | Expense: ₱${totalExpense()} | Balance: ₱${accountBalance()}`;
  }

  return {
    addIncome,
    addExpense,
    totalIncome,
    totalExpense,
    accountBalance,
    accountInfo
  };
}

// Example usage
const myAccount = personAccount('Juan', 'Dela Cruz');

myAccount.addIncome('Salary', 30000);
myAccount.addIncome('Freelance', 15000);
myAccount.addExpense('Rent', 10000);
myAccount.addExpense('Groceries', 5000);

console.log('Level 3:');
console.log(myAccount.accountInfo()); // Shows full info with income, expense, and balance
