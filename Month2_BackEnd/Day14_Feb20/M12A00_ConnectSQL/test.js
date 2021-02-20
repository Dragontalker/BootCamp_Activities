const express = require('express');
const mysql = require('mysql');

const app = express();

const connectDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sql23248265YT',
    database: 'favorites_db'
});

connectDb.connect((error) => {
    if (error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    connectDb.query("SELECT * FROM favorite_songs WHERE artist = 'Ariana Grande'", (error, rows, fix) => {
        if (error) {
            console.log('Error in the query');
        } else {
            console.log('Successfull query');
            console.log(rows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}...`);
});