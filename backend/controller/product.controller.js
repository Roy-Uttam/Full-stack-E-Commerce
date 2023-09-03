const Product = require("../models//product.model");


// get all Product
exports.getAllProduct = async (req, res, next) => {
  const products = await Product.find();

  if(!products){
    return res.status(500).json({
      success:false,
      message:"Product not found"
    })
  }
  
  res.status(200).json({
    success: true,
    products,
  });
  };

  // get single Product
exports.ProductDetails = async (req, res, next) => {
  const products = await Product.findById(req.params.id);
  
  if(!products){
    return res.status(500).json({
      success:false,
      message:"Product not found"
    })
  }

  res.status(200).json({
    success: true,
    products
  });
  };

// Create Product
exports.createProduct = async (req, res, next) => {
  const products = await Product.create(req.body);

  res.status(201).json({
    success: true,
    products,
  });
};

// update Product
exports.UpdateProduct = async (req, res, next) => {
  
  let products =await Product.findById(req.params.id);

  if(!products){

    return res.status(500).json({
      success:false,
      message:"Product not found"
    })
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
};


  // Delete Product
  exports.DeleteProduct = async (req, res, next) => {
    const products = await Product.findById(req.params.id);
    
    if(!products){
      return res.status(500).json({
        success:false,
        message:"Product not found"
      })
    }
    await products.deleteOne()

    res.status(200).json({
      success: true,
      message:"Product deleted succesfully"
    });
    };





