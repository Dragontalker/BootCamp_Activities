const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };

app.get('/monsters', (req, res, next) => {
    res.send(monsters);
});

app.get('/monsters/:name', (req, res, next) => {
    console.log(req.params)
    res.send(monsters[req.params.name]);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});