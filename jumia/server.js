const express = require('express');
const cors = require("cors");
const app=express();
app.use(cors());


const bodyParser = require("body-parser");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const UserRoute = require("./Routes/User.route");
const verifyToken = require("./MiddleWare/verifyToken")


app.use("/user" ,UserRoute);


app.get("/",(req,res)=>{
    res.send("hello King");
})

app.listen(4000,()=>{
    console.log("running on 4000")
})


