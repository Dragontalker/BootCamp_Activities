// dependencies
// =====================================================================================
const express = require('express');
const path = require('path');
const { getMaxListeners } = require('process');
// =====================================================================================


// initializing 
// =====================================================================================
const app = express();

// json array
const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    }
];
// =====================================================================================


// middleware
// =====================================================================================

// setting public the directory for our static files.
// which means, you no longer need handlers such as res.sendFile(path.join(__dirname, 'public', 'index.html'));
app.use(express.static(path.join(__dirname, 'public')));
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