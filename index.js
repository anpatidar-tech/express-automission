const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Received request at /');
  res.send('New deployment successful!');
});

app.get('/exit', (req, res) => {
  console.log('Received request at /exit');
  res.send('Server is shutting down...');
  process.exit(0);
});


app.listen(port, () => {
  console.log(`Hello Example app listening at http://localhost:${port}`);
});
