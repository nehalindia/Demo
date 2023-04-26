const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")

// router.post("/createUser", UserController.createUser )
// router.get("/getUsersData", UserController.getUsersData)

router.post("/addBook", UserController.addBook)
router.get("/getBook", UserController.getBook)



module.exports = router;