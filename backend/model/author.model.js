const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  profilePhoto: {
    type: String,
    required: false,
  },
  linkedIn: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Author = mongoose.model('Author', authorSchema);

module.exports = {Author}