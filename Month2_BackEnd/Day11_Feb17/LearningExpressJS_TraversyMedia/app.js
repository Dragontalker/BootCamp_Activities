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
app.use(logger);
// =====================================================================================


// handlers
// =====================================================================================

// creating an json api for /api/members
app.get('/api/members', (req, res) => {
    res.json(members);
});

// =====================================================================================


// creating server
// =====================================================================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
// =====================================================================================