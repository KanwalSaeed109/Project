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
    status:{
        type:String,
        required:true
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
    addDate:{
        type:Date,
        default : Date.now
    },
    editDate:{
        type: Date,
        default : Date.now
    }
    
});




//we will create a new collection
const Patient = new mongoose.model('Patient',patientSchema);
module.exports = Patient;