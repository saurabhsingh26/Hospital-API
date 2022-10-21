/// imports
const Patient = require('../../../models/patients');
const Doctor = require('../../../models/doctors');
const jwt = require('jsonwebtoken');


// Patient Registration
module.exports.register = async function(req,res){
    
    const doctor = req.doctor._id;

    try{
        const phone = req.body.phone;
        // We are checking patient with phone number, 
        // if patient already exists then simply return the patient details
        const patient = await Patient.find({phone}); 
        if(patient.length > 0){
            return res.status(200).json({
                success: true,
                patient:patient
            });
        }
        // else create patient 
        // also creating doctor id in patient schema
        patient = await Patient.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age,
            gender: req.body.gender,
            doctor: doctor
        });
        console.log("patient",patient);
        return res.status(200).json({
            success: true,
            message: "Patient registration successfull",
            body: patient,
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}
