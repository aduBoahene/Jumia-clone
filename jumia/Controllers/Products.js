const db = require("../Config/db.config");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



exports.getAllProducts= async (req,res)=>{
    try{
        const result =await db.query("Select * from product");
       
    res.status(200).json({
        data: result.rows
    })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
    
}