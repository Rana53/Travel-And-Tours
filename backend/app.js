const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userRouter = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', userRouter);

module.exports = app;
