// 'use strict';

// const mongoose = require('mongoose');
// require('dotenv').config();

// const mongoHost = process.env.MONGO_HOST || 'localhost';
// const mongoPort = process.env.MONGO_PORT || '27017';

// const connect = async () => {
//     try {
//         await mongoose.connect(
//             `mongodb://${mongoHost}:${mongoPort}/viaplay`, 
//             { useNewUrlParser: true }, 
//             { useUnifiedTopology: true }
//         );
//         console.log('Viaplay DB Connection Success!');
//         return mongoose.connection;
//     } catch( error ) {
//         console.log(`Cannot connect to the mongo db: ${error}`);
//     }
// };

// module.exports = connect;

// mongoose.connect("mongodb://localhost/viaplay", { useNewUrlParser: true }, { useUnifiedTopology: true });

// const db = mongoose.connection;
// db.once('open', () => console.log('irun')).on('error', error => console.error(error));

// module.exports = db;

