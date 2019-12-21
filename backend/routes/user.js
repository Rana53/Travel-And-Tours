const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null,'./backend/images/users')
  },
  filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname);
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
  
  User.find({ email: req.body.email})
    .then(user => {
      if(user.length > 0){
        return res.status(500).json({
          message: "Mail exists"
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
              contactNumber: req.body.number,
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
  User.find().select('name imagePath')
    .then( users => {
      res.status(201).json({
        message: "All User list",
        users: users
      })
    })
});
router.delete('/:userId', (req, res, next) => {
  User.findByIdAndDelete({_id: req.params.id})
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