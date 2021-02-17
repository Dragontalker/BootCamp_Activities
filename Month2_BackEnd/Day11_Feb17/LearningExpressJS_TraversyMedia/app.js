// dependencies
// =====================================================================================
const express = require('express');
const path = require('path');
const members = require('./public/Members')
// =====================================================================================


// initializing 
// =====================================================================================
const app = express();

const logger = require('./middleware/logger')
// =====================================================================================


// middleware
// =====================================================================================

// setting public the directory for our static files.
// which means, you no longer need handlers such as res.sendFile(path.join(__dirname, 'public', 'index.html'));
app.use(express.static(path.join(__dirname, 'public')));

// creating a logger
// app.use(logger);
// =====================================================================================


// handlers
// =====================================================================================

// creating an json api for /api/members
app.get('/api/members', (req, res) => {
    res.json(members);
});

// getting a single member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({msg: `No member with the id of ${req.params.id}.`});
    };
});
// =====================================================================================


// creating server
// =====================================================================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
// =====================================================================================