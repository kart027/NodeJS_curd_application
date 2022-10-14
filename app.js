const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const { urlencoded } = require("express");
const ejs = require("ejs");
const { connectdb } = require("./Database/connect.js")
const  { user } = require("./Model/Schema.js");
const app = express();



const router = require("./routes/route.js")



app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyparser.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

connectdb();




app.use("/post/",router);






app.listen(1000,()=>{
    console.log("port is listenning at ${}")
})


