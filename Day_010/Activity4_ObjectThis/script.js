console.log(this);

// Making a small change.
function helloThis() {
  console.log('Inside this function, this is ', this);
}

// Showing the window object.
helloThis();

// You should see that this within object refer to myObject instead of window object due to change of scope.
var myObject = {
  helloThis: function() {
    console.log('Inside this myObject, this is ', this);
  }
}

// Showing the myObject object.
myObject.helloThis();

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
