const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Task 4: Create a GET /api/quotes/random route.
app.get('/api/quotes/random', (req, res) => {
    res.send(getRandomElement(quotes));
});

// Task 5: Creat a GET /api/quotes route with a query string with a person attribute.
app.get('/api/quotes', (req, res) => {
    const targetPerson = req.query.person;
    const found = quotes.some(quote => quote.person === targetPerson);
    if (found) {
        res.send(quotes.filter(quote => quote.person === targetPerson));
    } else {
        res.status(400).send([]);
    };
});

// Completed task 1-3, server is now live.
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}...`);
});


