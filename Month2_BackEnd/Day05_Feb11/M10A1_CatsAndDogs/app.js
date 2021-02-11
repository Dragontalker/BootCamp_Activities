// Create a dog object.
const dog ={
    raining: true,
    noise: "Woof!",
    makeNoise() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

// Create a cat object.
const cat = {
    raining: false,
    noise: "Meow!",
    makeNoise() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};


// Test:
dog.makeNoise();
cat.makeNoise();

// How to make cat noise?
cat.raining = true;
dog.makeNoise();
cat.makeNoise();

