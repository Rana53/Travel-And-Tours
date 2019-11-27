const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null,'./backend/images/users')
  },
  filename: (req, file, cb) => {
      cb(null, new Date().toDateString() + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
if (file.mimetpe === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetpe === 'image/jpg'){
    cb(null, true);
  } else {
    cb(null, false);
  }
}
const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
});

router.post('/signup', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
    name: {
      first: req.body.firstName,
      last: req.body.lastName
    },
    imagePath : (typeof req.file == "undefined") ? null : req.file.path,
    //imagePath: req.file.path,
    contactNumber: req.body.number,
    address: req.body.address
  });
  user.save()
  .then((result) => {
      res.status(200).json({
        message: 'user created successfully',
        user: result
      })
  })
  .catch((err) => {
    res.status(500).json({
      message: err
    });
  });
  
});

module.exports = router;



/*
const emailValidator = require("email-validator");
const emailExistence = require('email-existence');
var validator = require('validator');
*/