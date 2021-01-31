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