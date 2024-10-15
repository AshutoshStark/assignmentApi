const express = require('express');
const axios = require('axios'); 
const pythonService = express.Router();

pythonService.get('/',async(req,res)=>{
    try{
        const response = await axios.get('https://pyapi-kwf4.onrender.com');
        res.json({service:response.data,success:true});
    }
    catch(error){
        res.status(500).send("Service Error")
    }
})

pythonService.post('/sendData',async(req,res)=>{
    try {
        const data = 
        {
           name:req.body.name,
           description:req.body.description
        }
        const result = await axios.post('https://pyapi-kwf4.onrender.com/items',data)
        res.status(200).json({service:result.data,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})

pythonService.get('/getData',async(req,res)=>{
    try {
        const id = req.body.id
        const result = await axios.get(`https://pyapi-kwf4.onrender.com/items/${id}`)
        res.status(200).json({service:result.data,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
})

module.exports = pythonService