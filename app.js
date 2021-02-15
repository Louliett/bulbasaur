"use strict";

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

//Routers
const restaurantRouter = require('./api/routes/restaurants');

//DB Setup
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoDb = process.env.MONGO_DB || 'viaplay';

mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoDb}`, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => console.log('MongoDB Connection Success!'));
db.on('error', error => console.error(error));

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//app.use(express.static('frontend'));

//API routes
app.use('/restaurants', restaurantRouter);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});


module.exports = app;