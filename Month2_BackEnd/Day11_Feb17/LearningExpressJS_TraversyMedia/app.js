const express = require('express');
const path = require('path');

const app = express();

const logger = require('./middleware/logger')

// setting public the directory for our static files.
// which means, you no longer need handlers such as res.sendFile(path.join(__dirname, 'public', 'index.html'));
app.use(express.static(path.join(__dirname, 'public')));

// creating a logger
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extend: false}));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
