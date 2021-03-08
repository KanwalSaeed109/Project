//require express
const express = require('express');

//define router
const router = express.Router();

//define model schema
const Feedback = require("../models/Feedback");


//create new feedback
router.post("/feedback", async(req,res)=>{
    const { message}=req.body;
            const newFeedback = new Feedback({message});
            newFeedback.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else 
                    res.status(201).json({message : {msgBody : "feedback successfully added", msgError: false}});
            });
    
});




//read the data of registered feedback
router.get("/feedback",async(req,res)=>{
    try{
        const feedbackData=await Feedback.find();
        res.send(feedbackData);
    }catch(e){
        res.send(e);
    }
})

module.exports=router;