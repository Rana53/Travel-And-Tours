const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
      type: String,
      required: true
  },
  imagePath: [{
    type: String,
    required: false,
    default: null
  }], 
  address: {
    country: {
      type: String
    },
    stateOrDivision: {
      type: String
    }
  },
  description: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: true
  },
  user: {
    type: String
  }
});

module.exports = mongoose.model('Place', userSchema);