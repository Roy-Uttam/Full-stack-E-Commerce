const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter description"],
  }, 
  category: {
    type: String,
    required: [true, "Please select category"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter price"],
    maxLength: [8, "Please Enter a valid price"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter stock"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  
});

module.exports = mongoose.model("Product", ProductSchema);