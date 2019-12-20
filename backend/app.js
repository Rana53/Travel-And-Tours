const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routes/user');
const placeRouter = require('./routes/place');

const mongoose = require('mongoose');
const url = 'mongodb+srv://tyro-travel-and-tour:'+
              process.env.MONGO_ATLAS_PW +
              '@cluster0-7ciui.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
  .then(() => {
    console.log('Database connected');
    })
  .catch(() => {
    console.log('Connection failed');
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users',express.static("backend/images/users"));
app.use('/places',express.static("backend/images/places"));

app.use('/api/user', userRouter);
app.use('/api/place', placeRouter);

module.exports = app;
