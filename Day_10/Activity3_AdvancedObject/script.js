// Lets write this differently from yesterday.
const doubleDouble = {
    name: "Coffee",
    numOfSugar: 2,
    readyOrNot: false,
    pickUp: function() {
        if (this.readyOrNot) {
            console.log(`${this.name} with ${this.numOfSugar} sugar, is ready for pick up!`);
        } else {
            console.log(`${this.name} with ${this.numOfSugar} sugar, is still in order queue, just one more minute!`);
        }
    },
    prepareCoffee: function(name, sugars) {
        this.name = name;
        this.numOfSugar = sugars;
        this.readyOrNot = false;
        console.log(`Preparing ${this.name} with ${this.numOfSugar} sugars! Please be patient!`);
    }
}

const black = {
    name: "Coffee",
    numOfSugar: 0,
    readyOrNot: true,
    pickUp: function() {
        if (this.readyOrNot) {
            console.log(`${this.name} with ${this.numOfSugar} sugar, is ready for pick up!`);
        } else {
            console.log(`${this.name} with ${this.numOfSugar} sugar, is still in order queue, just one more minute!`);
        }
    },
    prepareCoffee: function(name, sugars) {
        this.name = name;
        this.numOfSugar = sugars;
        this.readyOrNot = false;
        console.log(`Preparing ${this.name} with ${this.numOfSugar} sugars! Please be patient!`);
    }
}

// Testing the objects.
black.pickUp();
black.prepareCoffee("Double Double", 2);

// Bonus: using for in loop to iterate the properties of the object.
const americano = {
    name: "Coffee",
    numOfSugar: 1,
    readyOrNot: true
}

const checkOrder = (obj) => {
    let list = Object.keys(obj);
    for (key in list) {
        console.log(obj[list[key]]);
    }
}
checkOrder(americano);
