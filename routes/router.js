const express = require('express'),
    router = express.Router(),
    parseRoutes = require('./parseRoutes');

router.use('/parse', parseRoutes);

module.exports = router;

