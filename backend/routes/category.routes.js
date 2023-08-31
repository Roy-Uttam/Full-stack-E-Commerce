const express = require("express");
const {
 
    getAllCategory,
    createCategory,
    UpdateCategory,
    DeleteCategory

} = require("../controller/category.controller");

const router = express.Router();


router.route("/Category").get(getAllCategory);
router.route("/Category/new").post(createCategory);
router.route("/Category/:id").put(UpdateCategory);
router.route("/Category/:id").delete(DeleteCategory);


module.exports = router;