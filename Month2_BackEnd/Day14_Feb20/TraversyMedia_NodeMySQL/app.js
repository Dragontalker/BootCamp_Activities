const express = require('express');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});