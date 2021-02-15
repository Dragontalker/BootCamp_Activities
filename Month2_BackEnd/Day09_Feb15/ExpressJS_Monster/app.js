const express = require('express');
const app = express();

const PORT = 4001;

const monsters = [
    {
        type: 'werewolf'
    },
    {
        type: 'hydra'
    },
    {
        type: 'chupacabra'
    }
];

app.get('/monsters', (req, res, next) => {
    res.send(monsters);
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});