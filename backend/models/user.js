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
  isAdmin: { //you can't shown this field to user regestration form
      type: Boolean,
      required: false,
      default: false
  },
  contactNumber: {type: String},
  address: { type: String},
  country: {type: String}
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);