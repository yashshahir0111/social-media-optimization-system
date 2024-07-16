// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL database connected');
});

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const sql = 'INSERT INTO customer3 (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to register user' });
    } else {
      console.log('User registered successfully');
      res.status(200).json({ success: true, message: 'User registered successfully' });
    }
  });
});

 
let user;
// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  user = username;
  const sql = 'SELECT * FROM customer3 WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to login' });
    } else {
      if (result.length > 0) {
        res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ success: false, message: 'Incorrect username or password' });
      }
    }
  });
});

// Endpoint to save response to the database
app.post('/save-response', (req, res) => {
  const { response, username } = req.body; // Extract username from request body

  const sql = 'UPDATE customer3 SET response = ? WHERE username = ?';
  db.query(sql, [response, user], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to save response' });
    } else {
      console.log('Response saved successfully');
      res.status(200).json({ success: true, message: 'Response saved successfully' });
    }
  });
});


// Endpoint to fetch suggestion for the current user
app.get('/get-suggestion', (req, res) => {
  const username = user; // Assuming you're passing the username as a query parameter

  const sql = 'SELECT response FROM customer3 WHERE username = ?';
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to fetch suggestion' });
    } else {
      if (result.length > 0) {
        const suggestion = result[0].response;
        res.status(200).json({ success: true, suggestion });
      } else {
        res.status(404).json({ success: false, message: 'No suggestion found for the user' });
      }
    }
  });
});


// Endpoint to fetch username
app.get('/get-username', (req, res) => {
  // Assuming the username is stored in a variable named 'user'
  const username = user; // Adjust this according to how you store the username

  if (username) {
    res.status(200).json({ username });
  } else {
    res.status(400).json({ message: 'Username not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
