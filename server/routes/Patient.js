//require express
const express = require('express');

//define router
const router = express.Router();

//define models schema
const Patient = require("../models/Patient");
const Medicine=require("../models/Medicine");
const { route } = require('./Donor');


//create new Patient
router.post("/patient", async(req,res)=>{
    const { patientname,disease,medname} = req.body;
    Patient.findOne({patientname},(err,patient)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(patient)
            res.status(201).json({message : {msgBody : "request successfully submitted", msgError: true}});
        else{
    const newPatient = new Patient({patientname,disease,medname});
    newPatient.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfully created and request submitted", msgError: false}});
            });
        }
    });  
});

//read the data of registered patient
router.get("/patient",async(req,res)=>{
    try{
        const patientsData=await Patient.find();
        res.send(patientsData);
    }catch(e){
        res.send(e);
    }
})

// get individual patient data using id
router.get("/patient/:id",async(req,res)=>{
try{
    const  _id = req.params.id;

    const patientData = await Patient.findById(_id);
    if(!patientData){
        res.send("patient not found");
        return res.status(404).send();
    }
    else{
        res.send(patientData);
    }
}catch(e){
    res.send("patient not found");
    res.status(500).send(e);
}
});

// delete patient by its id
router.delete("/patient/:id",async(req,res)=>{
try{
    const deletePatient = await Patient.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        res.send("patient not exists");
        return res.status(400).send();
    }
    res.send(deletePatient);
    res.send("patient deleted");
}catch(e){
    res.send("patient not exists");
    res.status(500).send(e);
}
});

// update patient by its id
router.patch("/patient/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    const updatePatient = await Patient.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updatePatient);

}catch(e){
    res.send("patient not found");
    res.status(404).send(e);
}
});


module.exports=router;