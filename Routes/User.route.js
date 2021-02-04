var express = require("express");
var router = express.Router();
const UserController = require("../Controllers/User");
const verifyToken = require("../MiddleWare/verifyToken")


router.get("/teste",verifyToken, UserController.teste);

router.post("/loginn", UserController.login);

router.post("/Register", UserController.register);



//export this router to use in our index.js
module.exports = router;
