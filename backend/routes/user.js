const express = require('express');
const router = express.Router();

const User = require('../models/user');
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
if (file.mimetpe === 'image/jpeg' || file.mimetype === 'image/png'){
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
        email: req.body.email,
        password: req.body.password,
        imagePath : (typeof req.file == "undefined") ? null : req.file.path
    });
    res.status(200).json(user);
});

module.exports = router;



/*
const emailValidator = require("email-validator");
const emailExistence = require('email-existence');
var validator = require('validator');
*/