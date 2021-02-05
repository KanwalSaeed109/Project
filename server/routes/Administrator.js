//require express
const express = require('express');

//define router
const router = express.Router();

//define models schema
const Administrator = require("../models/Administrator");


//create new administrator
router.post("/administrator", async(req,res)=>{
    const { username,password,phoneNumber,addDate,editDate } = req.body;
    Administrator.findOne({username,phoneNumber},(err,administrator)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(administrator)
            res.status(400).json({message : {msgBody : "admin is already present", msgError: true}});
        else{
    const newAdmin = new Administrator({username,password,phoneNumber,addDate,editDate});
    newAdmin.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            }); }
        });
})

//login admin
router.post("/administrator/login", async(req,res)=>{
    const { username,password } = req.body;
    Administrator.findOne({username,password},(err,administrator)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(administrator)
            res.status(400).json({message : {msgBody : "login successfully", msgError: true}});
        else{
            res.status(201).json({message : {msgBody : "username or password is incorrect", msgError: false}});
            }
        });
})

//read the data of registered administrator
router.get("/administrator",async(req,res)=>{
    try{
        const administratorsData=await Administrator.find();
        res.send(administratorsData);
    }catch(e){
        res.send(e);
    }
})

// get individual administrator data using id
router.get("/administrator/:id",async(req,res)=>{
try{
    const  _id = req.params.id;

    const administratorData = await Administrator.findById(_id);
    if(!administratorData){
        res.send("administrator not found");
        return res.status(404).send();
    }
    else{
        res.send(administratorData);
    }
}catch(e){
    res.send("administrator not found");
    res.status(500).send(e);
}
});

// delete administrator by its id
router.delete("/administrator/:id",async(req,res)=>{
try{
    const deleteAdministrator = await Administrator.findByIdAndDelete(req.params.id);
    if(!req.params.id){
        res.send("administrator not exists");
        return res.status(400).send();
    }
    res.send("administrator deleted");
    res.send(deleteAdministrator);   
}catch(e){
    res.send("administrator not exists");
    res.status(500).send(e);
}
});

// update administrator by its id
router.patch("/administrator/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    const updateAdministrator = await Administrator.findByIdAndUpdate(_id, req.body,{
        new:true
    });
    res.send(updateAdministrator);

}catch(e){
    res.send("administrator not found");
    res.status(404).send(e);
}
});


module.exports=router;