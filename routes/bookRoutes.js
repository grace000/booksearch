const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const session = require('cookie-session');
const config = require('../config');

router.use(session({ signed: true, secret: config.cookieSecret }));

//GET books for one user
router.get('/', (req, res, next) => {
  const userId = req.session.user.id;
  const bookQuery = Book.find({users: userId});
  
  bookQuery.exec((err,products) => {
    if (err) return next(err);
    res.send(products);
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
  
  const userId = req.session.user.id;
  Book.find({"id": req.body.id}).countDocuments((err,count) => {
    if (count === 0){
      const newBook = new Book({
        id: req.body.id,
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        publisher: req.body.publisher,
        image: req.body.image,
        infoLink: req.body.infoLink,
        users: userId
      });

      newBook.save((err, product) => {
      if (err) return next(err);
        console.log("book saved!");
        res.send(product);
      });
    }
    else {
      Book.findOneAndUpdate(
        {"id":req.body.id}, 
        {$push:{users:userId}}, 
        {new:true}, (err, doc) => {
          if(err) return next(err);
          console.log("book already exists, users updated");
          res.send(doc);
      });
    }
  })

});


module.exports = router;