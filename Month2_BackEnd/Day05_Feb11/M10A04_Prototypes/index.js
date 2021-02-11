// 1st TODO: This is a constructior function that creates an object with inputs as its properties.
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// 2nd TODO: This is a method that prints all the stats of the character.
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// 3rd TODO: This is a method that prints living status based on the remaining hitpoint property.
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// 4th TODO: This is a method that updates the target object's property.
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// 5th TODO: This is a method that updates the object's own property.
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// 6th TODO: rogue has a strength of 20, warrior's hitpoint will drop to 55.
warrior.printStats();

// 7th TODO: since warrior still have 55 hitpoints left, he is alive. 
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
rogue.printStats();
