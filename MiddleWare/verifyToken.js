var jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    try{
        var token = req.headers['authorization'];
        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.' });
    
        jwt.verify(token, "config.secret", function (err, decoded) {
            if (err)
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
            // if everything good, save to request for use in other routes
            req.username = decoded.username;
            next();
        });
    }catch(err){
        res.send(err);
    }
   
}

module.exports = verifyToken;