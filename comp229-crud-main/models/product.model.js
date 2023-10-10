var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: {
    type: String,
    enum: ['Men', 'Women', 'Teens']
  },
});

module.exports = mongoose.model('Product', ProductSchema)