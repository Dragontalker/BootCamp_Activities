//WRITE YOUR CODE BELOW
const doubleDouble = {
    name: "Coffee, DoubleDouble",
    numOfSugar: 2,
    readyOrNot: false
}

const black = {
    name: "Coffee, Black",
    numOfSugar: 0,
    readyOrNot: true
}

const pickUp = (obj) => {
    if (obj.readyOrNot) {
        console.log(`${obj.name} is ready for pick up!`);
    } else {
        console.log(`${obj.name} is still in order queue, just one more minute!`);
    }
}

pickUp(black);
pickUp(doubleDouble);