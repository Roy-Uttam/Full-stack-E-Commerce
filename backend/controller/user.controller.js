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
exports.UpdateUSer = async (req, res, next) => {
  
  let user =await User.findById(req.params.id);

  if(!user){

    return res.status(500).json({
      success:false,
      message:"User not found"
    })
  }

  user = await User.findByIdAndUpdate(req.params.id,req.body,{

    new:true,
    runValidator:true,
    useFindByModify:false
  });

  res.status(200).json({
    success: true,
    user,
  });
};


// Create User
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
  };