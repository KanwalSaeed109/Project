const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt =require('bcrypt');
const DonorSchema=new mongoose.Schema({
    donorname:{
        type:String,
        required:true,
        minlength: 3,
        unique:true
        //maxlength: 30   
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
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
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
        //max:15
    },
    /*image: {
        type: String
    },*/
    email:{
        type:String,
        required:[true,"Email id already present"],
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    }
    
});




//we will create a new collection
const Donor = new mongoose.model('Donor',DonorSchema);
module.exports = Donor;