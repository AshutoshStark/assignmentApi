const mongoose = require("mongoose");

const imageView = new mongoose.Schema({
    teacherName:{
        type:String,
        required:true,
    },
    teacherMail:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        require:true,
    },
    points:{
        type:Number,
        required:false,
        default:0,
    }
},
{timestamp:true},
)

module.exports = mongoose.model("imageView",imageView);