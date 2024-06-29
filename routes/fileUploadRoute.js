const express = require("express");
const route = express.Router();
const fileUpload = require("../modules/assignmentUpload")

//this is the parent path all the routes is "*host-url*/api/"

route.get("/getFilesByName", async(req,res)=>{

    const userId = req.query.userId;

    try{
        const result = await fileUpload.find({
            uploaderMail:userId,
        })
        res.status(200).json({fileUpload:result})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

})
route.get("/getFilesBySub", async(req,res)=>{

    const subject = req.query.subject;

    try{
        const result = await fileUpload.find({
            subject:subject,
        })
        res.status(200).json({fileUpload:result})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

})

route.post("/addFile", async(req,res)=>{
    try{
        const result = await fileUpload.create({
            fileURL:req.body.fileURL,
            fileTitle:req.body.fileTitle,
            uploaderName:req.body.uploaderName,
            uploaderMail:req.body.uploaderMail,
            subject:req.body.subject,
        })
        res.status(200).json({
            fileUpload:result,
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

route.put("/check",async(req,res)=>{

    const Id = req.query.Id;
    
    try{    
        await fileUpload.updateOne({_id:Id,},{
                marks:req.body.marks,
                checked:req.body.checked,
            })
        res.status(200).json({success:true});
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
})

route.delete("/deleteFile", async(req,res)=>{
    try{
        const file_id = req.query.file_id;
        const result = await fileUpload.deleteOne({
            _id:file_id,
        })
        res.status(200).json({
            fileUpload:result,
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