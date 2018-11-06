const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Require Express web framework and Express middleware
const app = express();


const PORT = process.env.PORT || 5000;

// Configure express, priority serve any static files
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.enable('trust proxy');


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});