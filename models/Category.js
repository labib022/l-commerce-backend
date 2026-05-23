const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    url: { type: String, default: '' },
    public_id: { type: String, default: '' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);