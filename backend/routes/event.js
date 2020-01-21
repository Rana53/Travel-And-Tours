const express = require('express');
const path = require('path');
const router = express.Router();
router.post("/", (req, res, next) =>{
  console.log(req.body.name);
  res.status(200).json({
      message: "recieve data",
      name: req.body.name
  });
});

module.exports = router;