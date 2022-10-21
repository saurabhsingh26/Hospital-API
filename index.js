const express = require('express');
const port = 3201
const db = require('./config/mongoose');   
const passportJWT = require('./config/passport-jwt-strategy');  //For authentication

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log(`Server running at port ${port}`);
})