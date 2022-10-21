const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const doctorSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true,
        unique: true
    },
    password: {
        type:String,
        require:true
    }
},{
    timestamps:true
})


doctorSchema.methods.getSignedJwtToken = function() {
return jwt.sign({ id: this._id }, 'secret', {
    expiresIn: '200m'
});
};
  

const Doctor = mongoose.model('Doctors',doctorSchema);

module.exports = Doctor;