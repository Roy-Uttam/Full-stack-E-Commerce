const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter email"],
  },
  phone: {
    type: Number,
    required: [true, "Please Enter phone"],
    maxLength: [11, "Please Enter a valid phone"],
  },
  address: {
    type: String,
    required: [true, "Please Enter Address"],
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

module.exports = mongoose.model("User", UserSchema);