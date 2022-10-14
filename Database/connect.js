const mongoose = require("mongoose");

exports.connectdb = ()=>{
    mongoose.connect("mongodb://localhost:27017/CURDDB")
    .then((c)=>{
        console.log("DB is connected");
    })
}