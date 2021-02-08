// Task 1: Create an empty class named School.
class School {
    // Task 2: Create an empty constructor() that accepts three parameters.
    constructor (name, level, numberOfStudents) {
        // Task 3: set the School properties.
        this._name = name,
        this._level = level,
        this._numberOfStudents = numberOfStudents
    };

    // Create getters for the name, level and numberOfStudents properties.
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
};

// Test:
let alSmith = new School('Al E. Smith', 'highschool', 415);
console.log(alSmith.name);
console.log(alSmith.level);
console.log(alSmith._numberOfStudents)