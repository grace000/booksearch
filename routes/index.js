const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

// book routes
router.use('/api/user/books', bookRoutes);

module.exports = router;