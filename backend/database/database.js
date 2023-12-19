const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5005;

app.use(cors())

const db = mysql.createConnection({
  host: 'database-1.cxqaule7kqob.us-east-1.rds.amazonaws.com',
  user: 'superadmin',
  password: 'Thesuperadmin$1',
  database: 'BTCLogin',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.use(bodyParser.json());

app.post('/api/createAccount', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }


    // Insert the user into the database
    const query = 'INSERT INTO user_results (username, passwd) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('User added to the database');
        res.status(200).json({ message: 'User added to the database' });
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send('Internal Server Error');
  }
});

const jwt = require('jsonwebtoken');

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    console.log(username);
    console.log(password);
    
    // const query = 'SELECT * FROM user_results WHERE username = \" OR id=1; -- ? AND passwd = ?

    // Check if the user exists in the database (replace with your authentication logic)
    const query = `SELECT * FROM user_results WHERE username = '${username}' AND passwd = '${password}'`;
    db.query(query, [username, password], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        // Check if the query returned a user
        if (result.length > 0) {
          const token = jwt.sign({username}, 'secretkey', {expiresIn: '1h'})
          console.log('User logged in');
          res.status(200).json({ message: 'User logged in', token, username});
        } else {
          console.log('Invalid username or password');
          res.status(401).json({ error: 'Invalid username or password' });
        }
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});