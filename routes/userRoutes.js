const express = require('express');
const router = express.Router();
const User = require('../models/User');

//GET ALL USERS 
router.get('/users/saved', (req, res, next) => {
  User.find((err, products) => {
    if (err) return next(err);
    res.json(products);
  });
});

// GET ONE USER
router.get('/users/saved/:id', (req, res, next) => {
    User.findById(req.params.id, (err,product) => {
        if (err) return next(err);
        res.json(product);
    });
});

// SAVE USER
router.post('/users/saved', (req, res, next) => {
  User.create(req.body, (err, product) => {
    if (err) return next(err);
    res.json(product);
  });
});

// DELETE USER
router.delete('/users/saved/:id', (req, res, next) => {
  User.findByIdAndRemove(req.params.id, req.body, (err, product) => {
    if (err) return next(err);
    res.json(product);
  });
});

module.exports = router;