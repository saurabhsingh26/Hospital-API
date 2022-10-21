const Doctor = require('../../../models/doctors');
const Patient = require('../../../models/patients');
const Report = require('../../../models/reports');


// creating reports using status
module.exports.createReport = async function(req,res){
    //
    const doctor =req.doctor._id;

    try{
        const report = await Report.create({
            doctor: doctor, 
            patient: req.params.id,  // from params
            status: req.body.status  
        });
        return res.status(200).json({
            success: true,
            message: "Report created successfully",
            report: report,
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}


// showing all the reports of patient
module.exports.allReports = async function(req,res){
    try{
        const reports = await Report.find({patient: req.params.id});
        return res.status(200).json({
            success: true,
            message: "All the reports of patient generated successfully",
            reports: reports,
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}


// showing reports by status 
module.exports.reportByStatus = async function(req,res){
    //
    try{
        const reports = await Report.find({status: req.params.status});
        return res.status(200).json({
            success: true,
            message: "Report has been generated successfully by status",
            reports: reports,
        })


    }catch(error){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}