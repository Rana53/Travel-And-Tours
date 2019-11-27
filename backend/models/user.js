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
  imagePath: {
    type: String,
    required: false,
    default: null
  },
  isAdmin: {
      type: Boolean,
      required: false,
      default: false
  }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);