const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;  // To Extract JWT from header.

const Doctor = require('../models/doctors');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "somethingblah",
}

passport.use(new JWTStrategy(opts, function(jwtPayload, done){

    Doctor.findById(jwtPayload._id, function(err, doctor){
        if(err){console.log('Error in finding doctor from JWT'); return }

        if(doctor){
            return done(null, doctor);
        }else{
            return done(null, false)
        }
    })
}));

module.exports = passport;