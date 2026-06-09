const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! deployment: 9 ');
});

app.get('/exit', (req, res) => {
  res.send('Server is shutting down...');
  process.exit(0);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
