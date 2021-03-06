const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String },
  description: { type: String, required: true },
  category: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
