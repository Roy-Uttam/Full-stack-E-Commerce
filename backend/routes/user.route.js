const express = require("express");
const {
 
    getAllUsers,
    createUser,
    UpdateUSer,
    DeleteUser

} = require("../controller/user.controller");

const router = express.Router();


router.route("/users").get(getAllUsers);
router.route("/users/new").post(createUser);
router.route("/users/:id").put(UpdateUSer);
router.route("/users/:id").delete(DeleteUser);


module.exports = router;