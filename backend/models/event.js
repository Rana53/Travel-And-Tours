const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date
  }, 
  placeId: {
    type: String,
    required: true
  },
  hostedBy: {
    type: String,
    required: true
  },
  attendee: [ ],
  description: {
    type: String
  }
});
module.exports = mongoose.model('Event', eventSchema);