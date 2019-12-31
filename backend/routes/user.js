const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if(isValid){
      error = null
    }
    cb(error, "backend/images/users");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    //console.log(name+'...'+ext);
    cb(null, name + '-' + Date.now()+'.' + ext);
  }
});

router.post('/signup', multer({storage}).single('image'), (req, res, next) => {
  console.log(req.body.email);
  User.find({ email: req.body.email})
    .then(user => {
      if(user.length > 0){
        console.log('douplication');
        return res.status(200).json({
          message: "Mail exist"
        });
      } else {
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            const user = new User({
              _id: mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
              name: {
                first: req.body.firstName,
                last: req.body.lastName
              },
              imagePath : (typeof req.file == "undefined") ? null : req.file.path,
              //imagePath: req.file.path,
              contactNumber: req.body.contactNumber,
              address: req.body.address
            });
            user.save()
              .then(user => {
                res.status(200).json({
                  message: 'User Created',
                  user: user 
                });
              })
              .catch(err => {
                return res.status(500).json({
                  message: err
                });
              });
        });
      }
    })
    .catch(err => {
      return res.status(500).json({
        message: err
      });
    });
});

router.post('/login', (req, res, err) => {
  User.findOne({ email: req.body.email})
    .then(user => {
      //console.log(user);
      if(!user){
        return res.status(505).json({
          message: 'User not found'
        });
      } else {
        console.log(user.password);
        bcrypt.compare(req.body.password, user.password)
          .then(match => {
             // console.log(match);
              if(!match){
                return res.status(505).json({
                  message: 'Password not match'
                });
              }
              res.status(200).json({
                message: 'Successfull login'
              });
          })
          .catch(err => {
            return res.status(505).json({
                message: err
            }); 
          });
      }
    })
});

router.get('', (req, res, next) => {
  User.find().select('name imagePath email')
    .then( users => {
      res.status(201).json({
        message: "All User list",
        users: users
      })
    })
});
router.delete('/:userId', (req, res, next) => {
  User.findByIdAndDelete({_id: req.params.userId})
  .then(place => {
    console.log("successfully deleted user");
    res.status(200).json(place); 
  });
});
module.exports = router;



/*
const emailValidator = require("email-validator");
const emailExistence = require('email-existence');
var validator = require('validator');
*/