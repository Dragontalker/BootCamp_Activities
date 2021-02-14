const express = require('express');

const app = express();

// First arguement: url, where '/' represents roots of the folder
// Second argument : a callback function with (request, response)
app.get('/', (req, res) => {
    // Defining the very first route
    res.send('Hello World');
});
