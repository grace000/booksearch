const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const User = require('../models/User');
const session = require('cookie-session');
const config = require('../config');

router.use(session({ signed: true, secret: config.cookieSecret }));

//GET ALL USERS BOOKS 
router.get('/', (req, res, next) => {
  const userId = req.session.user.id;
  const userQuery = User.findById(userId).select("books");
  
  userQuery.exec((err,products) => {
    if (err) return next(err);
    res.send(products);
  });
});

// GET ONE USER BOOK
router.get('/:id', (req, res, next) => {
  const userId = req.session.user.id;
  const userQuery = User.findById(userId).select("books");
  
  userQuery
    .populate("id", req.body.id)
    .exec((err,product) => {
      if (err) return next(err);
      res.send(product);
    });
});

// SAVE BOOK to user's profile
router.post('/', (req, res, next) => {
  if (! req.body.title)
    return next(new Error('Must at lease provide book title'));
  
  const newBook = new Book(req.body.book);
  
  newBook.save((err, product) => {
    if (err) return next(err);
      User.findOneAndUpdate(
        {_id:req.session.user.id}, 
        {$push:{books:product._id}}, 
        {new:true}, (err, doc) => {
          if(err) return next(err);
          res.send(doc);
      });
  });
  console.log("book saved!");
});

// DELETE BOOK from user's profile
router.delete('/:id', (req, res, next) => {
  const userId = req.session.user.id;
  const bookId = req.body.book.id;

  User.findOneAndUpdate(
    {_id:userId},
    {$pull:{books:bookId}},
    {new:true},
    (err,product) => {
      if(err) return next(err);
      res.send(product);
    })
  console.log("book deleted!");
});

module.exports = router;