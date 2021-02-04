const express = require('express');
const cors = require("cors");
const app=express();
app.use(cors());
const path = require("path");

if(process.env.NODE_ENV==="production"){
    express.static(path.join(__dirname,"client/build"))
}


const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const UserRoute = require("./Routes/User.route");
const verifyToken = require("./MiddleWare/verifyToken");
const productRoute = require('./Routes/Product.route');


app.use("/user" ,UserRoute);
app.use("/product" ,productRoute);


app.get("/",(req,res)=>{
    res.send("hello King");
})

app.listen( port || 4000,()=>{
    console.log(`running on ${port}`)
})


