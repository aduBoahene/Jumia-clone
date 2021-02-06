const db = require("../config/db.config");
const nodemailer = require('nodemailer');


exports.mail = async(req,res)=>{
    try{
        const result = await sendMail(req.body.from,req.body.to,req.body.subject,req.body.text)
        console.log(result)
        res.status(200).send({
            data:"Message sent"
        })
    }
    catch(error){
        console.log("object".error)
    }
}


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


function sendMail(from,to,subject,text){
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'boahenepatrick2@gmail.com',
          pass: 'bbbold90001'
        }
      });
   
  const message = {
    from, 
    to,
    subject,
    text
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
}