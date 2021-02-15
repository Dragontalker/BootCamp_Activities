const http = require('http');

// Creating the first server.
const PORT1 = 7000;

const callbackFunction1 = (request, response) => {
    response.end('To err is human, but to really foul things up you need a computer');
};

const serverOne = http.createServer(callbackFunction1);

serverOne.listen(PORT1, () => {
    console.log(`Server litstening on : http://localhost:${PORT1}...`);
});