const Category = require("../models/category.model");

// Create Category
exports.createCategory = async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    category,
  });
};

// update Category
exports.UpdateCategory = async (req, res, next) => {
  
  let category =await Category.findById(req.params.id);

  if(!category){

    return res.status(500).json({
      success:false,
      message:"Category not found"
    })
  }

  category = await Category.findByIdAndUpdate(req.params.id,req.body,{

    new:true,
    runValidator:true,
    useFindByModify:false
  });

  res.status(200).json({
    success: true,
    category,
  });
};


  // Delete Category
  exports.DeleteCategory = async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    
    if(!category){
      return res.status(500).json({
        success:false,
        message:"Category not found"
      })
    }
    await category.deleteOne()

    res.status(200).json({
      success: true,
      message:"Category deleted succesfully"
    });
    };

// get all Category
exports.getAllCategory = async (req, res, next) => {
  const category = await Category.find();

  res.status(200).json({
    success: true,
    category,
  });
  };




