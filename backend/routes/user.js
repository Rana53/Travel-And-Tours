const express = require('express');
const emailValidator = require("email-validator");
const emailExistence = require('email-existence');
var validator = require('validator');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    if(!emailValidator.validate(req.body.email)){
        return res.status(505).json({
            message: "Ivalid Email"
        });
    } 
    res.status(200).json({
        email: req.body.email,
        password: req.body.password,
        message: "success"
    });
});

module.exports = router;