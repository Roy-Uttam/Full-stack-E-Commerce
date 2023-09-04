const Product = require("../models//product.model");
const ErrorHandler = require("../utlis/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utlis/apiFeature");

// get all Product
exports.getAllProduct = catchAsyncError(async (req, res, next) => {

  const apiFeature = new ApiFeatures(Product.find(), req.query).search();
    const products = await apiFeature.query;

  if(!products){
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({
    success: true,
    products,
  });
  })

  // get single Product
exports.ProductDetails = catchAsyncError(async (req, res, next) => {
  const products = await Product.findById(req.params.id);
  
  if(!products){
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({
    success: true,
    products
  });
  })

// Create Product
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const products = await Product.create(req.body);

  res.status(201).json({
    success: true,
    products,
  });
})

// update Product
exports.UpdateProduct = catchAsyncError(async (req, res, next) => {
  
  let products =await Product.findById(req.params.id);

  if(!products){
    return next(new ErrorHandler("product not found", 404));
  }

  products = await Product.findByIdAndUpdate(req.params.id,req.body,{

    new:true,
    runValidator:true,
    useFindByModify:false
  });

  res.status(200).json({
    success: true,
    products,
  });
})


  // Delete Product
  exports.DeleteProduct = catchAsyncError(async (req, res, next) => {
    const products = await Product.findById(req.params.id);
    
    if(!products){
      return next(new ErrorHandler("product not found", 404));
    }

    await products.deleteOne()

    res.status(200).json({
      success: true,
      message:"Product deleted succesfully"
    });
    })





