const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const User = require('../models/User');
const session = require('cookie-session');
const config = require('../config');

router.use(session({ signed: true, secret: config.cookieSecret }));

//GET books for one user
router.get('/', (req, res, next) => {
  const userId = req.session.user.id;
  const bookQuery = Book.find({users: userId});
  // const bookQuery = Book.find({users: userId}).select('-users');
  
  bookQuery.exec((err,products) => {
    if (err) return next(err);
    console.log(products);
    res.send(products);
  });
});

// GET all books saved
router.get('/allbooks', (req, res, next) => {
  Book.find({}, (err,data) => {
    console.log(data);
    res.send(data);
  });
});

// GET ONE USER BOOK
router.get('/:id', (req, res, next) => {
  const userId = req.session.user.id;
  const bookQuery = Book.find({}).select(["users", userId]);
  
  bookQuery
    .populate("id", req.body.id)
    .exec((err,product) => {
      if (err) return next(err);
      res.send(product);
    });
});

// SAVE user to book profile
router.post('/', (req, res, next) => {
  if (! req.body.title)
    return next(new Error('Must at lease provide book title'));
  
  const preBookSearch = Book.findById(req.body.book.id);
  const userId = req.session.user.id;

  if (!preBookSearch){
    const newBook = new Book(req.body.book);
  
    newBook.save((err, product) => {
      if (err) return next(err);
        res.send(product);
    });
  console.log("book saved!");
  } 
  else {
    Book.findOneAndUpdate(
      {id:preBookSearch}, 
      {$push:{users:userId}}, 
      {new:true}, (err, doc) => {
        if(err) return next(err);
        res.send(doc);
    });
  }
  console.log("book already exists");
});

// DELETE user from book profile
router.delete('/:id', (req, res, next) => {
  const userId = req.session.user.id;
  const bookId = req.params.id;

  Book.find(
    {id:bookId},
    {$pull:{users:userId}},
    {new:true},
    (err,product) => {
      if(err) return next(err);
      res.send(product);
    })
  console.log("book deleted!");
});

module.exports = router;