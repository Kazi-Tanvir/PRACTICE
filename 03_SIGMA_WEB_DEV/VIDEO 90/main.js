const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

app.use((req, res, next) => {
  fs.appendFileSync('requests.log', `${new Date().toISOString()} ${req.method} ${req.url}\n`);
  console.log(`${req.method} ${req.url}`);
  next(); 
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});