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

// Creates a function called "massHysteria" which takes in both objects and 
// Prints a message to the screen if ".raining" is true for both of them
const massHysteria = (dogObj, catObj) => {
    if (dogObj.raining & catObj.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

// Test:
massHysteria(dog, cat);

