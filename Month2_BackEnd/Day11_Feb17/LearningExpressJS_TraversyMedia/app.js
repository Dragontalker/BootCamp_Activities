// dependencies
// =====================================================================================
const express = require('express');
const path = require('path');

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
app.use('/api/members', require('./routes/api/members'));
// =====================================================================================


// creating server
// =====================================================================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
// =====================================================================================