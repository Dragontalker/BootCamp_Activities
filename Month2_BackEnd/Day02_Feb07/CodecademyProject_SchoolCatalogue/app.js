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

    // Create a setter for numberOfStudents, that first check if the input (newNumberOfStudents) is a number.
    set numberOfStudents(input) {
        if (typeof input === "number") {
            this._numberOfStudents = input;
        } else {
            console.log("Invalid inpupt: numberOfStudents must be set to a number.");
        }
    }
};

// Test:
let alSmith = new School('Al E. Smith', 'highschool', 415);
console.log(alSmith.name);
console.log(alSmith.level);
console.log(alSmith.numberOfStudents)
alSmith.numberOfStudents = 400;
console.log(alSmith.numberOfStudents)