const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt =require('bcrypt');
const DonationSchema=new mongoose.Schema({
    mg:{
        type:String,
        required:true,  
    },
    donateDate:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    medname:{
        type:String,
        required:true
    },
    editDate:{
        type: Date,
        default : Date.now
        //required:true
    },
    expiryDate:{
        type: Date,
        default : Date.now
        //required:true
    }

    
});




//we will create a new collection
const Donation = new mongoose.model('Donation',DonationSchema);
module.exports = Donation;