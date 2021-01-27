// Task 1: Create a function to get sleep hours per day.
const getSleepHours = (day) => {
    // Task 2: The function should return the number of hours by input.
    day = day.toLowerCase();
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 7;
    } else if (day === 'friday') {
        return 4;
    } else if (day === 'saturday') {
        return 6;
    } else if (day === 'sunday') {
        return 7;
    } else {
        return 'Error: You must enter a day in the week!'
    }
}

// Task 3: Test the functions.
console.log(getSleepHours('monday'));
console.log(getSleepHours('SUNDay'));
console.log(getSleepHours('today!'));

// Task 4: Creating a function to calculate sleep debt.
const getActualSleepHours = () => {
    // Task 5: Add the results together and return the sum.
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

// Task 6: To get the ideal sleep hours that you prefer, create a new function.
const getIdealSleepHours = () => {
    var idealHours = 8;
    return idealHours * 7;
}

// Task 7: Test two new functions.
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// Task 8: Create a new function to calculate sleep debt.
const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    // Task 9: Print different message for each result.
    if (actualSleepHours === idealSleepHours) {
        return 'Great! You got the perfect amount of sleep!'
    } else if (actualSleepHours > idealSleepHours) {
        // Task 10: Add the hours the user is over or udner their ideal sleep in each log statement.
        var excessSleep = actualSleepHours - idealSleepHours;
        return 'Hmmmm...You have ' + excessSleep + ' hours of sleeps more than ideal weekly level.';
    } else {
        var lackSleep = idealSleepHours - actualSleepHours;
        return 'Caution! You need ' + lackSleep + ' more hours of sleep to meet the ideal weekly level!';
    }
}

// Task 11: Calling function to test it.
console.log(calculateSleepDebt());