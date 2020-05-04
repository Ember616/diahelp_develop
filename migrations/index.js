const ParseServerConfig = require('parse-server/lib/Config'),
    ParseServer = require('parse-server').ParseServer,
    config = require('dotenv').config({ path: '../.env' }).parsed;

const server = new ParseServer({
    databaseURI: config.DATABASE_URI,
    //   cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
    appId: config.PARSE_APP_ID,
    masterKey: config.PARSE_MASTER_KEY,
    //   fileKey: 'optionalFileKey',
    serverURL: config.PARSE_SERVER_URL,
    allowClientClassCreation: false
});

async function migrate() {
    const config = ParseServerConfig.get("myAppId", "/parse/server");
    const schema = await config.database.loadSchema();

    try {
        await schema.addClassIfNotExists('Posts', {
            name: { type: 'String' },
            isActive: { type: 'Boolean', default: true }
        });

        console.log('Class created');
    } catch (err) {
        console.log(err);
    }

}

migrate();