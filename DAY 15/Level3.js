class Statistics {
  constructor(data) {
    this.data = data.sort((a, b) => a - b);
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  }

  min() {
    return this.data[0];
  }

  max() {
    return this.data[this.data.length - 1];
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.round(this.sum() / this.count());
  }

  median() {
    const mid = Math.floor(this.count() / 2);
    return this.count() % 2 === 0
      ? (this.data[mid - 1] + this.data[mid]) / 2
      : this.data[mid];
  }

  mode() {
    const freqMap = {};
    this.data.forEach(num => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });

    let maxFreq = 0;
    let mode = null;
    for (let num in freqMap) {
      if (freqMap[num] > maxFreq) {
        maxFreq = freqMap[num];
        mode = Number(num);
      }
    }

    return { mode, count: maxFreq };
  }

  var() {
    const mean = this.mean();
    const variance = this.data.reduce((acc, val) => acc + (val - mean) ** 2, 0) / this.count();
    return Math.round(variance * 10) / 10;
  }

  std() {
    return Math.round(Math.sqrt(this.var()) * 10) / 10;
  }

  freqDist() {
    const freqMap = {};
    this.data.forEach(num => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });

    const result = [];
    for (let num in freqMap) {
      const percent = (freqMap[num] / this.count()) * 100;
      result.push([Math.round(percent * 10) / 10, Number(num)]);
    }

    return result.sort((a, b) => b[0] - a[0]);
  }

  describe() {
    console.log('Count:', this.count());
    console.log('Sum: ', this.sum());
    console.log('Min: ', this.min());
    console.log('Max: ', this.max());
    console.log('Range: ', this.range());
    console.log('Mean: ', this.mean());
    console.log('Median: ', this.median());
    console.log('Mode: ', this.mode());
    console.log('Variance: ', this.var());
    console.log('Standard Deviation: ', this.std());
    console.log('Frequency Distribution: ', this.freqDist());
  }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
statistics.describe();

// ===== Level 3: PersonAccount Class =====
class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  }

  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  }

  totalIncome() {
    return this.incomes.reduce((acc, curr) => acc + curr.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((acc, curr) => acc + curr.amount, 0);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    return `${this.firstname} ${this.lastname} | Balance: ${this.accountBalance()}`;
  }
}

const person = new PersonAccount('Avenald', 'Jacla');
person.addIncome(5000, 'Salary');
person.addIncome(1500, 'Freelance');
person.addExpense(2000, 'Rent');
person.addExpense(800, 'Groceries');

console.log(person.accountInfo());
console.log('Total Income:', person.totalIncome());
console.log('Total Expense:', person.totalExpense());
console.log('Account Balance:', person.accountBalance());