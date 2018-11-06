const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongojs = require('mongojs');
require('dotenv').config();
const config = require('./config');
const cors = require('cors');

//Import book and user models
const Book = require('./models/Book');

/* Require "auth" service for authenticating users and getting profile info */
const auth = require('./auth')(config);

// Require Express web framework and Express middleware
const app = express();
const session = require('cookie-session');

const PORT = process.env.PORT || 5000;

// Configure express, priority serve any static files
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.enable('trust proxy');
app.use(session({ signed: true, secret: config.cookieSecret }));

// Use book and user routes
const routes = require('./routes');
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
//Get database uri
const mongoURI = config.mongoUri || "mongodb://localhost/booksearch";
// Connect to the Mongo DB
mongoose.connect(mongoURI,{ useNewUrlParser: true })
  .then(() => console.log("connection successful to mongo"))
  .catch((err)=>console.error("error connecting to mongo", err));

const options = {
  origin: true,
  methods: ['GET']
}

/* Redirect user to OAuth 2.0 login URL */
app.get('/login', cors(options), function(req, res) {
  var authenticationUrl = auth.getAuthenticationUrl();
  res.redirect(authenticationUrl);
});

/* Use OAuth 2.0 authorization code to fetch user's profile */
 app.get('/oauth2callback', function(req, res, next) {
   if (req.query.code){
    auth.getUser(req.query.code, function(err, user) {
      if (err) return next(err);
      req.session.user = user;
      res.redirect('/');
    });
   }
 });

 /* Send authentication message for client */
 app.get('/user', function (req, res) {
   if (req.session.user){
     res.json({userAvailable: "true"});
   }
   else res.json({userAvailable: "false"});
});

/* Clear the session */
app.get('/logout', function(req, res) {
  req.session = null;
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});