const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
require('dotenv').config();

const Database = mongoose.connection;

Database.on('Connected',()=>{
    console.log("Database connected")
});

// starting point of the server 

app.get('/',cors(),(req,res)=>{
    res.status(200).json(
        "welcome to the Assignment api"
    );
});

var corsOptions = {
    origin : '*',
    credential : true,
    optionSuccessStatus : 200,
    port : PORT,
};

app.use(cors(corsOptions));
app.use(express.json());

//import routes

const route = require("./route");

//this will help in routing in the api using / api route

app.use("/api",route);

mongoose.connect(process.env.MONGODB_URL);

app.listen(PORT, ()=>{
    console.log(
        `server started at port number : ${PORT}`
    )
})

module.exports = app;
