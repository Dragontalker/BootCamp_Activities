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

// Task 8: Create an empty PrimarySchool class that extends School.
class PrimarySchool extends School {
    // Task 9: Create a constructor() that accepts three arguments.
    constructor(name, numberOfStudents, pickupPolicy) {
        // Task 10: Call super on the first line of the PrimarySchool's constructor().
        super(name, 'Primary', numberOfStudents);
        // Task 11: Use the remaining arugment to set the pickupPolicy property.
        this._pickupPolicy = pickupPolicy;
    }

    // Task 12: Create one new getter to the PrimarySchool Class.
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

// Task 13: Create a Highschool class that extends the School class.
class Highschool extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeam;
    }
    get sportsTeam() {
        return this._sportsTeams;
    }
}

// Task 14:
const lorrainHansbury = new School('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

