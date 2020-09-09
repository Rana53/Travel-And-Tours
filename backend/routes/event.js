const express = require('express');
const path = require('path');
const router = express.Router();
const Event = require('../models/event');
const mongoose = require('mongoose');

router.post("/createEvent", (req, res, next) =>{
  const _event = new Event({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    date: req.body.date,
    placeId: req.body.placeId,
    hostedBy: req.body.hostedBy,
    description: req.body.description
  });
  Event.find({title: req.body.title})
    .then(event => {
      if(event.length > 0){
        console.log('Event Name Exist')
        return res.status(200).json({
          duplication: true,
          message: 'Event Name Already Taken'
        });
      } else {
        _event.save()
          .then( (event) => {
            console.log('event successFully Saved',event)
            res.status(200).json({
              success: true,
              message: 'event Successfully added'
            });
          })
          .catch((err) => {
            console.log("Error", err)
            return res.status(500).json({
              message: err
            });
          })
        }
    })
    .catch((err) => {
      console.log("Error", err)
      return res.status(500).json({
        message: err
      });
    })
});
router.get('', (req, res, next) => {
  Event.find()
    .then((events) => {
      console.log("all event are ", events);
      res.status(200).json({
        message: 'success',
        events : events
      })
      
    })
    .catch((error) => {
      res.status(500).json({
        message: "error",
        error : error
      })
    })
})
router.delete('/:id', (req, res, next) => {
  console.log("Delete id ",req.params.id);
  Event.findByIdAndDelete({_id: req.params.id})
    .then(event => {
      res.status(200).json(event); 
    })
})
module.exports = router;