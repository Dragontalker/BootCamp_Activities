// Contructor function for DigitalPal objects.
const DigitalPal = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.houseQuality = 100;
};

// Prototype method: printStatus.
DigitalPal.prototype.printStatus = function() {
    console.log(`Hungry? ${this.hungry}`);
    console.log(`Sleep? ${this.sleepy}`);
    console.log(`Bored? ${this.bored}`);
    console.log(`This digital pal is ${this.age} years old.`);
    console.log(`The quality of current house is at ${this.houseQuality}%`);
};

// Prototype method: feed.
DigitalPal.prototype.feed = function() {
if (this.hungry) {
    console.log("That was yummy!");
    this.hungry = false;
    this.sleepy = true;
}
else {
    console.log("No thanks, I'm full.");
}
};

// Prototype method: sleep.
DigitalPal.prototype.sleep = function() {
if (this.sleepy) {
    console.log("ZZzzZZZzzZZz~~");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
}
else {
    console.log("No way! I'm not tired!");
}
};

// Prototype method: play.
DigitalPal.prototype.play = function() {
if (this.bored) {
    console.log("Yay! Let's play!");
    this.bored = false;
    this.hungry = true;
}
else {
    console.log("Not right now. Maybe later?");
}
};

// Prototype method: destroyFurniture.
DigitalPal.prototype.destroyFurniture = function() {
if (this.houseQuality - 10 > 0) {
    this.houseQuality -= 10;
    this.bored = false;
    this.sleepy = true;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
}
else {
    console.log("I've already destroyed it all!");
}
};

// Prototype method: buyNewFurniture.
DigitalPal.prototype.buyNewFurniture = function() {
this.houseQuality += 50;
console.log("Are you sure that's a good idea?");
};

// Prototype method: increaseAge.
DigitalPal.prototype.increaseAge = function() {
this.age++;
console.log("Happy Birthday to me! I am " + this.age + " old!");
};

// Prototype method: letOutside.
DigitalPal.prototype.letOutside = function() {
if (!this.outside) {
    console.log("Yay! I love the outdoors!");
    this.outside = true;
    this.bark();
}
else {
    console.log("We're already outside though...");
}
};

// Prototype method: letInside.
DigitalPal.prototype.letInside = function() {
if (this.outside) {
    console.log("Aww... Do I have to?");
    this.outside = false;
}
else {
    console.log("We're already inside though...");
}
};

// Prototype method: bark.
DigitalPal.prototype.bark = function() {
console.log("Woof! Woof!");
};

// Prototype method: meow.
DigitalPal.prototype.meow = function() {
console.log("Meow! Meow!");
};

// Test:
const dog = new DigitalPal()
dog.printStatus();

