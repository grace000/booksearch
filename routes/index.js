const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

// routes
router.use('/api/user/books', bookRoutes);
router.use('/users', userRoutes);

module.exports = router;