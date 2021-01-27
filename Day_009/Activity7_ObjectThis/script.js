console.log(this);

function helloThis() {
  // Here, "this" refers to object "window".
  console.log('Inside this function, this is ' + this);
}

var child = {
  age: 10,
  ageTenYears: function () {
    // Here, "this" refers to object "child".
    console.log(`${this.age + 10}`);
  }
};

console.log(child.age);
child.ageTenYears();

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      // Here, "this" refers to object "investment".
      console.log(this.initialInvestment * 1.15);
    },
  },
};

console.log(investor.name);
console.log(investor.investment.initialInvestment);
investor.investment.investmentGrowth();
