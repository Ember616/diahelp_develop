var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();

//user@domain.com,SuperSecret

var api = new ParseServer({
    // databaseURI: 'mongodb://root:123456a@ds029575.mlab.com:29575/sample', // Connection string for your MongoDB database
    // databaseURI: 'User ID=jsqllsou;Password=EsOXu318-NVPIVjsXc866ymQI3ArbTPa;Host=kandula.db.elephantsql.com;Port=5432;Database=jsqllsou;Pooling=true;Min Pool Size=0;Max Pool Size=100;Connection Lifetime=0;',
    databaseURI: 'postgres://postgres:mysecretpassword@localhost:5432/postgres',
    //   cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
    appId: 'myAppId',
    masterKey: 'myMasterKey', // Keep this key secret!
    //   fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

var options = { allowInsecureHTTP: false };

var dashboard = new ParseDashboard({
    apps: [
        {
            "serverURL": "http://localhost:1337/parse",
            "appId": "myAppId",
            "masterKey": "myMasterKey",
            "appName": "MyApp"
        }
    ]
}, options);


// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);
app.use('/dashboard', dashboard);

app.listen(1337, function () {
    console.log('parse-server-example running on port 1337.');
});