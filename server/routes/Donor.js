//require express
const express = require('express');

//define router
const router = express.Router();

//define model schema
const Donor = require("../models/Donor");


//create new donors
router.post("/donor", async(req,res)=>{
    const { donorname,password,address,addDate,editDate,phoneNumber,email}=req.body;
    Donor.findOne({donorname},(err,donor)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(donor)
            res.status(400).json({message : {msgBody : "Donor is already present", msgError: true}});
        else{
            const newDonor = new Donor({donorname,password,address,addDate,editDate,phoneNumber,email});
            newDonor.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else 
                    res.status(201).json({message : {msgBody : "donor successfully added", msgError: false}});
            });
        }
    }); 
});

//login donor
router.post("/donor/login", async(req,res)=>{
    const { donorname,password}=req.body;
    Donor.findOne({donorname,password},(err,donor)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(donor)
            res.status(400).json({message : {msgBody : "login successfully", msgError: true}});
        else{
            res.status(201).json({message : {msgBody : "donorname or password is incorrect", msgError: false}});
        }
    }); 
});

//read the data of registered donors
router.get("/donor",async(req,res)=>{
    try{
        const donorsData=await Donor.find();
        res.send(donorsData);
    }catch(e){
        res.send(e);
    }
})

// get individual donor data using id
router.get("/donor/:id",async(req,res)=>{
try{
    const  _id = req.params.id;

    const donorData = await Donor.findById(_id);
    if(!donorData){
        res.send("donor not found");
        return res.status(404).send();
    }
    else{
        res.send(donorData);
    }
}catch(e){
    res.send("donor not found");
    res.status(500).send(e);
}
});

// delete donor by its id
router.delete("/donor/:id",async(req,res)=>{
try{
    const deleteDonor = await Donor.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        res.send("Donor not exists");
        return res.status(400).send();
    }
    res.send(deleteDonor);
    res.send("Donor deleted");
}catch(e){
    res.send("Donor not exists");
    res.status(500).send(e);
}
});

// update donor by its id
router.patch("/donor/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    const updateDonor = await Donor.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateDonor);

}catch(e){
    res.send("Donor not found");
    res.status(404).send(e);
}
});


module.exports=router;