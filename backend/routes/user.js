const express = require('express');
const path = require('path');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const MIME_TYPE_MAP =  { 
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

router.post('/login', (req, res, next) => {
  console.log('onLogin');
  console.log(req.body.email);
  let fetchUser;
  User.findOne({ email: req.body.email.toString()})
    .then(user => { 
      if(!user){
        console.log("use not find");
        throw new Error("User profile not found");
      }
      fetchUser = user;
      return bcrypt.compare(req.body.password, user.password);
    }) 
      .then(result => { 
        if(!result){
          throw new Error("Password not match with user");
        }
        const token = jwt.sign(
          { email: fetchUser.email, userId: fetchUser._id},
          "secret_key_should_be_long",
          {
            expiresIn: "1h"
          }
        );
        res.status(200).json({ 
          message: "Successfull", 
          token: token,
          expiresIn: 3600,
          userId: fetchUser._id
        });
      })        
    .catch(err=>{
      console.log("Error " + err)
      res.status(505).json({
        message: err
      }); 
    })
});


router.get('', (req, res, next) => {
  User.find().select('name email password')
    .then( users => {
      res.status(201).json({
        message: "All User list",
        users: users
      })
    })
});
router.post('/get-user-by-attendee',(req, res, next) =>{
  User.findOne({email: req.body.email})
    .then(user => {
      res.status(200).json({
        success: true,
        user: user
      }); 
    })
    .catch(error => {
      res.status(500).json({
        success: 'false',
        user: error
      });
    })
  
})
router.delete('/:userId', (req, res, next) => {
  User.findByIdAndDelete({_id: req.params.userId})
  .then(place => {
    console.log("successfully deleted user");
    res.status(200).json({message: 'Done'}); 
  });
});
module.exports = router;
              


/*
const emailValidator = require("email-validator");
const emailExistence = require('email-existence');
var validator = require('validator');
*/