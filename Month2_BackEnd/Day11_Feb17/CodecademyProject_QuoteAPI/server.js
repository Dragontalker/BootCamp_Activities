const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Completed task 1-3, server is now live.
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}...`);
});