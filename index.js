const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = _.map([1, 2, 3], (n) => n * 2);
  res.json({ message: 'Hello World!', data });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
