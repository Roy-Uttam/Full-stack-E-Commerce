const express = require("express");
const {
 
    getAllUsers,
    createUser,
    UpdateUSer

} = require("../controller/user.controller");

const router = express.Router();


router.route("/users").get(getAllUsers);
router.route("/users/new").post(createUser);
router.route("/users/:id").put(UpdateUSer);


module.exports = router;