const mongoose = require('mongoose');

const GiftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  animationUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Gift', GiftSchema);