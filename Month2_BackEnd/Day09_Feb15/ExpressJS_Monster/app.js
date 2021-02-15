const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };

app.get('/monsters', (req, res, next) => {
    res.send(monsters);
});

app.get('/monsters/:name', (req, res, next) => {
    const monsterObject = monsters[req.params.name];

    if (monsterObject) {
        res.send(monsterObject);
    } else {
        res.status(404).send('Monster not found.');
    };
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});