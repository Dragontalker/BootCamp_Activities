const http = require('http');

// Creating the first server.
const PORT1 = 7000;

const callbackFunction1 = (request, response) => {
    response.end('To err is human, but to really foul things up you need a computer');
};

const serverOne = http.createServer(callbackFunction1);

serverOne.listen(PORT1, () => {
    console.log(`Server listening on http://localhost:${PORT1}...`);
});

// Creating the second server.
const PORT2 = 7500;

const callbackFunction2 = (request, response) => {
    response.end("Never trust a computer you can't throw out a window.");
};

const serverTwo = http.createServer(callbackFunction2);

serverTwo.listen(PORT2, () => {
    console.log(`Server listening on http://localhost:${PORT2}...`)
});