const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    patientname:{
        type:String,
        required:true, 
    },
    disease:{
        type:String,
        required:true,
    },
    mednanme:{
        type:String,
        required:true
    }/*,
    mg:{
        type:String,
        required:true
    },
    phoneNum:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    critical:{
        type:Boolean,
        required:true
    },
    income:{
        type:Number,
        require:true
    },
    CNIC:{
        type:Number,
        length:13,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    status:{
    type:String
    },
    Count:{
        type:Number
    }*/
});




//we will create a new collection
const Patient = new mongoose.model('Patient',patientSchema);
module.exports = Patient;