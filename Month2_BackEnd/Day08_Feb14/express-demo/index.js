const express = require('express');

const app = express();

// First arguement: url, where '/' represents roots of the folder
// Second argument : a callback function with (request, response)
app.get('/', (req, res) => {
    // Defining the very first route, this is also called a route handler
    res.send('Hello World');
});

// Define the second route
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// Add a port listenr
app.listen(3000, () => console.log('Listening on PORT 3000....'));