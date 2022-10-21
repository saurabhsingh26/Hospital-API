// imports

const Doctor = require('../../../models/doctors');
const jwt = require('jsonwebtoken');


// Doctor registration
module.exports.register = async function(req,res){
    try{
        let doctor = await Doctor.find({email:req.body.email})
        if(doctor.length > 0){
            return res.status(200).json({
                success:true,
                doctor: doctor
            })
        }
        doctor = await Doctor.create(req.body); // creating doctor in database
        // console.log(doctor);

        return res.status(200).json({
            success: true,
            message: "Doctor registered successfully",
            data:{
                doctor
            }
        });
    }catch(error){
        return res.status(200).json({
            success: false,
            message: error.message
        })
    }
}


// Doctor login
module.exports.login = async function(req,res){
    
    try{
        // checking if doctor is present or not in database using doctor's email
        let doctor = await Doctor.findOne({email: req.body.email});

        // if doctor is not present or password does not match with entered password 
        // then it will give message "Invalid username or password" with status code 422
        if(!doctor || doctor.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token please keep it safe',
            data: {
                // token: jwt.sign(doctor.toJSON(), 'somethingblah', {expiresIn: '100000000'})
                token : doctor.getSignedJwtToken(),
            }
        })

    }catch{
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}