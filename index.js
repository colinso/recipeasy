const express = require('express');
const MongoClient = require('./adapters/mongo/client');
const { PORT } = require('./config');
const expressApp = require('./express-app');

console.log('Loading function');

const StartServer = async() => {

    const app = express();
    const db = new MongoClient();
    await db.connect()
    

    await expressApp(app, db);
    

    app.listen(PORT, () => {
          console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
    .on('close', () => {
        channel.close();
    })
    

}

StartServer();

// Lambda handler
// exports.handler = async function (event, context) {
//   console.log("EVENT: \n" + JSON.stringify(event, null, 2));
//   return context.logStreamName;
// };
