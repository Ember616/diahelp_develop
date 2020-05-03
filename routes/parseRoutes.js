const express = require('express'),
    router = express.Router(),
    parseMiddlewares = require('../middlewares/parseMiddlewares');

router.use('/server', parseMiddlewares.server);

module.exports = router;