const ParseServer = require('parse-server').ParseServer,
    ParseDashboard = require('parse-dashboard'),
    config = require('../configuration/index');

const parseServerMiddleware = new ParseServer({
    databaseURI: config.DATABASE_URI,
    //   cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
    appId: config.PARSE_APP_ID,
    masterKey: config.PARSE_MASTER_KEY,
    //   fileKey: 'optionalFileKey',
    serverURL: config.PARSE_SERVER_URL,
    allowClientClassCreation: false
});

const parseDashboardMiddleware = new ParseDashboard({
    apps: [
        {
            serverURL: config.PARSE_SERVER_URL,
            appId: config.PARSE_APP_ID,
            masterKey: config.PARSE_MASTER_KEY,
            appName: "MyApp"
        }
    ]
}, {
    allowInsecureHTTP: false
});

module.exports = { server: parseServerMiddleware, dashboard: parseDashboardMiddleware };