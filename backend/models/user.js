const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    first: String, 
    last: String
  },
  imagePath: {
    type: String,
    required: false,
    default: null
  },
  isAdmin: {
      type: Boolean,
      required: false,
      default: false
  },
  contractNumber: {type: String},
  address: {type: String}
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);