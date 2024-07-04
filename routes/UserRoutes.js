const express = require("express");
const route = express.Router();
const Users = require("../modules/User")

//this is the parent path all the routes is "*host-url*/api/"

route.get("/getUserByEmail", async(req,res)=>{

    const userId = req.query.userId;

    try{
        const result = await Users.find({
            uploaderMail:userId,
        })
        res.status(200).json({Users:result})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

})
route.get("/getUsers", async(req,res)=>{

    try{
        const result = await Users.find({})
        res.status(200).json({Users:result})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

})

route.post("/addUser", async(req,res)=>{
    try{
        const result = await Users.create({
            UserName:req.body.UserName,
            UserMail:req.body.UserMail,
            PassWord:req.body.PassWord,
        })
        res.status(200).json({
            Users:result,
            success:true,
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
})

route.put("/UpdatePass",async(req,res)=>{

    const Id = req.query.Id;
    
    try{    
        await Users.updateOne({UserMail:Id,},{
                PassWord:req.body.PassWord,
            })
        res.status(200).json({success:true});
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
})

route.delete("/deleteUser", async(req,res)=>{
    try{
        const file_id = req.query.file_id;
        const result = await Users.deleteOne({
            _id:file_id,
        })
        res.status(200).json({
            Users:result,
            success:true,
        })
    }
    catch(error){
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
})

module.exports = route;