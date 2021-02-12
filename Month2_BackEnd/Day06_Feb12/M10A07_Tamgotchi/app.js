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
  