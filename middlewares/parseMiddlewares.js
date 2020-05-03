const ParseServer = require('parse-server').ParseServer,
    ParseDashboard = require('parse-dashboard');

const parseServerMiddleware = new ParseServer({
    databaseURI: 'postgres://postgres:mysecretpassword@localhost:5432/postgres',
    //   cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
    appId: 'myAppId',
    masterKey: 'myMasterKey', // Keep this key secret!
    //   fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:1337/parse/server', // Don't forget to change to https if needed
    allowClientClassCreation: false
});

const parseDashboardMiddleware = new ParseDashboard({
    apps: [
        {
            "serverURL": "http://localhost:1337/parse/server",
            "appId": "myAppId",
            "masterKey": "myMasterKey",
            "appName": "MyApp"
        }
    ]
}, {
    allowInsecureHTTP: false
});

module.exports = { server: parseServerMiddleware, dashboard: parseDashboardMiddleware };