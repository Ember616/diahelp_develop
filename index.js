const express = require('express'),
    router = require('./routes/router'),
    middlewares = require('./middlewares/parseMiddlewares'),
    app = express();

//user@domain.com,SuperSecret

app.use(router);
app.use('/parse/dashboard', middlewares.dashboard);

app.listen(1337, function () {
    console.log('parse-server-example running on port 1337.');
});