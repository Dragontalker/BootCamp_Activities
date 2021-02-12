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
  