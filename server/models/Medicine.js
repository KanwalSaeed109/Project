const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt =require('bcrypt');
const MedicineSchema=new mongoose.Schema({
    medname:{
        type:String,
        required:true,
        //minlength: 3,
        //unique:true
        //maxlength: 30   
    },
    mg:{
        type:String,
        required:true,
    },
    availibility:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
    },
    addDate:{
        type:Date,
        default : Date.now
        //required:true
    },
    editDate:{
        type: Date,
        default : Date.now
        //required:true
    }  
});


//we will create a new collection
const Medicine = new mongoose.model('Medicine',MedicineSchema);
module.exports = Medicine;