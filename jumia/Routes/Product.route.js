var express = require("express");
var productRoute = express.Router();
const ProductController = require("../Controllers/Products");
const verifyToken = require("../MiddleWare/verifyToken")


productRoute.get("/getAllProducts", ProductController.getAllProducts);




//export this router to use in our index.js
module.exports = productRoute;
