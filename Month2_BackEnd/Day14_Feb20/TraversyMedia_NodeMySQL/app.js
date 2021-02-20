const express = require('express');
const mysql = require('mysql');

const app = express();


// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sql23248265YT',
    database: 'favorites_db'
});


// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});





// Create a server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});