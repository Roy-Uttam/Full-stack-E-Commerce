const express = require("express");
const {
 
    getAllProduct,
    createProduct,
    UpdateProduct,
    DeleteProduct

} = require("../controller/product.controller");

const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/products/new").post(createProduct);
router.route("/products/:id").put(UpdateProduct);
router.route("/products/:id").delete(DeleteProduct);


module.exports = router;