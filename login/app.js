import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Enable parsing of form POST data
app.use(express.urlencoded({ extended: true }));

// Setup static file serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

// Hardcoded credentials
const CORRECT_USERNAME = 'admin';
const CORRECT_PASSWORD = '1234';

// POST /login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    res.send(`<h2>Login successful! Welcome, ${username}.</h2>`);
  } else {
    res.send('<h2>Login failed. Invalid username or password.</h2>');
  }
});

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
