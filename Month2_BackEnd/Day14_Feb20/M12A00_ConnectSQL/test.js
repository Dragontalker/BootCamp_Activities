const express = require('express');
const mysql = require('mysql');

const connectDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sql23248265YT',
    database: 'favorites_db'
});