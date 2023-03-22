const express = require('express');
const app = express();
const functions = require('./equetion.json')

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.get('/api/objects/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * functions.length);
  const randomFunction = functions[randomIndex];
  res.send(randomFunction);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));