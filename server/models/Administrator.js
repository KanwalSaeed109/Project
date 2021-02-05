const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt =require('bcrypt');
const AdministratorSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength: 3,
        //unique:true
        //maxlength: 30   
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        //unique:true,
        //max:15
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
const Administrator = new mongoose.model('Administrator',AdministratorSchema);
module.exports = Administrator;