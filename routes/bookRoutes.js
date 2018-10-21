const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const User = require('../models/User');

//GET ALL USERS BOOKS 
router.get('/api/user/books', (req, res, next) => {
  const userId = req.user._id;
  const userQuery = User.findById(userId).select("books");
  
  UserQuery.exec((err,products) => {
    if (err) return next(err);
    res.send(products);
  });
});

// GET ONE USER BOOK
router.get('/api/user/books/:id', (req, res, next) => {
    Book.find({id:req.body.id}, (err,product) => {
        if (err) return next(err);
        res.json(product);
    });
});

// SAVE BOOK to user's profile
router.post('/api/user/books', (req, res, next) => {
  const newBook = new Book(req.body.book);
  
  newBook.save((err, product) => {
    if (err) return next(err);
      User.findOneAndUpdate(
        {_id:req.body.userId}, 
        {$push:{books:product._id}}, 
        {new:true}, (err, doc) => {
          if(err) return next(err);
          res.send(doc);
      });
  });
  console.log("book saved!");
});

// DELETE BOOK from user's profile
router.delete('/api/user/books/:id', (req, res, next) => {
  const userId = req.user.id;
  const bookId = req.params.id;

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