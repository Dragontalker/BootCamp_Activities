// Contructor function for DigitalPal objects.
const DigitalPal = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.houseQuality = 100;
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