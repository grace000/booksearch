const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// User routes
const routes = require('./routes');
app.use(routes);

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});