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

    // Task 5: Create a setter for numberOfStudents, that first check if the input (newNumberOfStudents) is a number.
    set numberOfStudents(input) {
        if (typeof input === "number") {
            this._numberOfStudents = input;
        } else {
            console.log("Invalid inpupt: numberOfStudents must be set to a number.");
        }
    }

    // Task 6: Create a method named quickFacts that logs the following string to the console:
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    // Task 7: Create a static method named pickSubstitueTeacher.
    static pickSubstituteTeacher(list) {
        let index = Math.floor(Math.random() * list.length);
        return list[index];
    }
};

// Test:
let alSmith = new School('Al E. Smith', 'high', 415);
console.log(alSmith.name);
console.log(alSmith.level);
console.log(alSmith.numberOfStudents)
console.log(alSmith.quickFacts());