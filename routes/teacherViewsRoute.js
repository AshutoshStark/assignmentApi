const express = require("express");
const route = express.Router();
const teacherView = require("../modules/TeacherViews")

//this is the parent path all the routes is "*host-url*/api/"
//this route will fetch all the mentor form the database

route.get("/getTeacher",async(req,res)=>{
    try{
        const result = await teacherView.find({});
        res.status(200).json({imageViews:result,success:true});
    }catch(error){
        res.status(500).json({message:error.message,success:false});
    }
});
route.get("/getTeacherById",async(req,res)=>{

    const userId = req.query.userId

    try{
        const result = await teacherView.findOne({
            teacherMail:userId,
        });
        res.status(200).json({imageViews:result,success:true});
    }catch(error){
        res.status(500).json({message:error.message,success:false});
    }
});

//this route will find specific subject mentor

route.post("/addTeacher",async(req,res)=>{
    try{
        const result = await teacherView.create({
            teacherName:req.body.teacherName,
            teacherMail:req.body.teacherMail,
            subject:req.body.subject,
        })
        res.status(200).json({teacherView:result,success:true})
    }
    catch(error){
        res.status(500).json({
            message:error.message,
            success:false,
        })
    }
})

route.put('/addpoints',async(req,res)=>{
    try{
        const teacherId = req.query.teacherId;

        const result = teacherView.updateOne({teacherMail:teacherId,},{
            points:points.req.points,
        })
        res.status(200).json({success:true})
    }catch(error){
        res.status(500).json({success:false,message:error.message})
    }
})

module.exports = route;