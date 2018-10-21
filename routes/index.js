const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

// routes
router.use(bookRoutes);
router.use(userRoutes);

module.exports = router;