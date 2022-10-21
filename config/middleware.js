const jwt = require('jsonwebtoken');
const Doctor = require("../models/doctors")

//verifying token
exports.verifyToken = async (req, res, next) => {

    
  let token;
  
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      req.token = token;
    }
    
    if (!token) {
      console.log("Token Error");
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
  
    try {

      const decoded = await jwt.verify(token, 'secret');
     
      req.doctor = await Doctor.findById(decoded.id);   // creating doctor in request
      next();


    } catch (err) {
      console.log(err);
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
  };

