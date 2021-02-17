// dependencies
const express = require('express');
const path = require('path');

// initializing 
const app = express();

// handlers
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


// creating server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});