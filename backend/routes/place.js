const express = require('express');
const path = require('path');
const router = express.Router();
const Place = require('../models/place');
const mongoose = require('mongoose');
const multer = require('multer');
     
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null,'backend/images/places');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype ==='image/png'){
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

router.get("", (req, res, next) => {
    console.log('get request');
    console.log(req.body.data);
    Place.find().then(places => {
      res.status(201).json({
        message: 'All Places Document',
        places: places
      });
    })
});

router.post('', upload.array('photos',10),(req, res, next) => {
  
  const place = new Place({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    address: {
      country: req.body.country,
      stateOrDivision: req.body.stateOrDivision
    },
    rating: req.body.rating,
    creator: 'thisPlaceReplaceWithLogInId'
  });
  req.files.forEach(e => {
    place.imagePath.push(e.path);
  });
  place.save().then(createdPlace => {
    res.status(201).json({
      message: 'Place added added successfully',
      place: createdPlace
    });
  });
});                                                       
router.get('/:id', (req, res, next) =>{
  const id = req.params.id;
  
})      
router.patch("/:placeId", (req, res, next) => {
  const id = req.params.placeId;
  const updateOps = {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value
  }
  Product.update({_id: id},{ $set: updateOps})
  .exec()
  .then(result=>{
    res.status(200).json(result);
  })
  .catch(err => {
    res.status(500).json({ error: err});
  });
});

router.delete("/:id", (req, res, next) => {
  Place.findByIdAndDelete({_id: req.params.id})
    .then(place => {
      console.log("successfully deleted");
      res.status(200).json(place); 
    });
});

module.exports = router;