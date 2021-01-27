//Task 6: Define name as a global variable.
const name = 'Nala'

const getRandEvent = () => {
    // Task 11: Move the random variable from the global scope to block scope within the getRandEvennt function.
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    // Task 2: To avoid reference eeror, declare days befire the if condition.
    var days;
    // Task 3: Deleting all the 'let's.
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
    };

// The scope of `name` is too tight 
// Task 5: Adding name as first parameter to reduce the duplicate code.
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

// Task 1: Run the program in console to see how it's broken.
// Task 4: Run the program again, fixed! Now the if statements are changing the original days rather than defining a new one.
// Task 7: Pass name as the first argument to logEvent() and logTime().
// Task 8: Run the program see if it still works, no it doesn't work anymore.
logEvent(name, event);
logTime(name, days);

// Task 9: Try the functions for another competitor.
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
// Task 10: Run the program.
logEvent(name2, event2);
logTime(name2, days2);