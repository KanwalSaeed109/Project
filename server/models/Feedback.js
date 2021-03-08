const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt =require('bcrypt');
const FeedbackSchema=new mongoose.Schema({
    
    message:{
        type:String,
        required:true
    }
    
    
});




//we will create a new collection
const Feedback = new mongoose.model('Feedback',FeedbackSchema);
module.exports = Feedback;