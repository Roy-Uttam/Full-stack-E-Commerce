const express = require("express");
const {
 
    getAllUsers,
    createUser

} = require("../controller/user.controller");

const router = express.Router();


router.route("/users").get(getAllUsers);
router.route("/users/new").post(createUser);

module.exports = router;