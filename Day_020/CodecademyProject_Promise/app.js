// Defining constant object for inventory.
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
  
// Create an executor function.
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

// Create a function that creates the promise.
const orderSunglasses = () => {
    return new Promise(myExecutor);
};

// Create the promise.
const orderPromise = orderSunglasses();

// Log the promise, you can see that the promise resolved.
console.log(orderPromise);           

// Demostrating how timeout works.
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code

const usingSTO = () => {
  console.log("This line of code will log to the console last.");
};

setTimeout(usingSTO, 100);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");