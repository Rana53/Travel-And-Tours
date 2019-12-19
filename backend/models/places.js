const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
  }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
