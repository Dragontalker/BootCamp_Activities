// Constructor function:
function Character(name, profession, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
}

// Test case 1:
const warrior = new Character("Crusher", "Warrior", 25, 10, 75);
console.log(warrior);

// Test case 2:
const rogue = new Character("Dodger", "Rogue", 23, 20, 50);
console.log(rogue);

// Test case 3:
const mage = new Character("Enigma", "Mage",31, 30, 25);
console.log(mage);

// Prototype method: printStats.
Character.prototype.printStats = function() {
    console.log("-------------");
    console.log(`Name: ${this.name}`);
    console.log(`Profession: ${this.profession}`);
    console.log(`Age: ${this.age}`);
    console.log(`HitPoints: ${this.hitpoints}`);
    console.log("-------------");
}

// Test case 1:
warrior.printStats();

// Test case 2:
rogue.printStats();

// Test case 3:
mage.printStats();

// Prototype method: isAlive.
Character.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
        console.log("\n-------------\n");
		console.log(this.name + " is still alive!");
		console.log("\n-------------\n");
		return true;
	} else {
        console.log("\n-------------\n");
        console.log(this.name + " has died!");
        console.log("\n-------------\n");
	return false;
    }
}

// Test case 1:
warrior.isAlive();

// Test case 2:
rogue.isAlive();

// Test case 3:
mage.isAlive();