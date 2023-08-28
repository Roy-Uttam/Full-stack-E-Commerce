const User = require("../models/user.model");

// Create User
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    user,
  });
};


// Create User
exports.getAllUsers = async (req, res, next) => {
  
    res.status(201).json({
      message:"all users"
    });
  };