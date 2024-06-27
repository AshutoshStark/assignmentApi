const mongoose = require("mongoose");

const assignmentUpload = new mongoose.Schema({

    fileURL:{
        type:String,
        required:true,
    },
    fileTitle:{
        type:String,
        required:true,
    },
    uploaderName:{
        type:String,
        required:true,
    },
    uploaderMail:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    marks:{
        type:Number,
        required:false,
    },
    checked:{
        type:Boolean,
        default:false,
        required:false,
    }

},
{timeStamp:true},
)

module.exports = mongoose.model("assignmentUpload",assignmentUpload);