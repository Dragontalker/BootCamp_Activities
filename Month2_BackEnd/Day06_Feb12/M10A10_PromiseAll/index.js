const apiCallDurations1 = [3000, 4000, 5000, 6000];
const apiCallDurations2 = [3000, 4000, 5000, 10000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: If the duration is longer than maxDuration, reject() the promise
      if (duration >= maxDuration) {
        reject(new Error(`This request has timed out after ${duration}ms`));
      } else {
        // TODO: Otherwise resolve() the promise
        resolve(`Reponse received: ${duration}ms`);
      }
    }, duration);
  });

const promisesPass = [];
const promisesFail = [];

apiCallDurations1.map((duration) => promisesPass.push(callAPI(duration)));
apiCallDurations2.map((duration) => promisesFail.push(callAPI(duration)));

console.log('Promises array before the timeouts have finished: ', promisesPass);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(promisesPass)
  .then((response) => console.log(`Reponse from Promise.all(): ${response}`))
  .catch((err) => console.log(err));