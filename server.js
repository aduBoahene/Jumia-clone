const express = require('express');
const cors = require("cors");
const app=express();
app.use(cors());
const path = require("path");


const whitelist = ['http://localhost:3000'​​]
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
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


