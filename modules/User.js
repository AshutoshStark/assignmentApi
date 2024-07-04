const mongoose = require("mongoose");

const User = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    UserMail:{
        type:String,
        required:true,
    },
    PassWord:{
        type:String,
        require:true,
    },
},
{timestamp:true},
)

module.exports = mongoose.model("User",User);