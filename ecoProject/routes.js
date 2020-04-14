// Import necessary frameworks
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Create connection
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : process.env.MYSQL_PASS,
  database : 'ecoProject',
  port: process.env.PORT
});

// Starting the app
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(process.env.PORT, () => {
 console.log('Go to http://localhost:PORT/users so you can see the data.');
});