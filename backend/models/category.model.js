const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter description"],
    trim: true,
  }


  
  
});

module.exports = mongoose.model("Category", CategorySchema);