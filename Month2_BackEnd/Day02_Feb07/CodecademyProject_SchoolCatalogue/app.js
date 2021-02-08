// Task 1: Create an empty class named School.
class School {
    // Task 2: Create an empty constructor() that accepts three parameters.
    constructor (name, level, numberOfStudents) {
        this._name = name,
        this._level = level,
        this._numberOfStudents = numberOfStudents
    }
};

// Test:
let alSmith = new School('Al E. Smith', 'highschool', 415);
console.log(alSmith._name);
console.log(alSmith._level);
console.log(alSmith._numberOfStudents)