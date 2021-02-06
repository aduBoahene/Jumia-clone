const db = require("../config/db.config");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



exports.teste= async (req,res)=>{
    const result =await db.query("Select * from tutorials");
    res.status(200).json({
        data:result.rows
    })
    //console.log(result.rows)
}

exports.register= async (req,res)=>{

    try{
        const {firstname,email,password,lastname,phone}=req.body;
        const user =await db.query("Insert into users (firstname,email,password,lastname,phone) values($1,$2,$3,$4,$5) returning *",
        [firstname,email,bcrypt.hashSync(password, 8),lastname,phone]);

        console.log(user)
        res.status(201).json({
            data: user.rows[0]
        });
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
    
    
}

exports.login=async (req,res)=>{

    try{
    const {email,password}=req.body;
    console.log("User on server",req.body)
    if(email=="" || password == ""){
        return res.status(404).send('No details were passed');
    }
    const user =await db.query("Select * from users where email=$1",[email]);
    if (!user) {
        return res.status(401).send({ auth: false, accessToken: null, error: "Invalid Credentials!" });
    }

    var passwordIsValid = bcrypt.compareSync(password, user.rows[0].password);
    if (!passwordIsValid) {
        return res.status(401).send({ auth: false, accessToken: null, error: "Invalid Credentials!" });
    }

    var token = jwt.sign({ 
        id:`${user.rows[0].id}`,
        email:`${user.rows[0].email}`,
        firstname:`${user.rows[0].firstname }`}, "config.secret", {
        expiresIn: 86400
    });

    res.status(200).send({ auth: true, accessToken: token });

}
catch(err){
    res.status(404).send({
        message:"Login Failed"
    });
}
}