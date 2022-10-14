const mongoose = require("mongoose")
const user = require("../Model/Schema.js")

exports.creat =  (req,res) =>{

    const newUser = new user({
        name:req.body.name,
        email:req.body.email,
       
    })    


    newUser.save((err,data)=>{
        if(err){
            return res.status(500).json({
                message:err
            })
        }else{
           res.redirect("/post/read")
        }
    })
    // .then((newCause) => {
    //   return res.status(201).json({
    //     success: true,
    //     message: 'New cause created successfully',
    //     user: newCause,
    //   });
      
    // })
    // .catch((error) => {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Server error. Please try again.',
    //     error: error.message,
    //   });
    // });
   
}

exports.read = (req,res)=>{
   
   user.find({},(err,data)=>{
        if(err){
            return req.status(500).json({
                message:err
            })
        }else{
            res.render('show_ejs',{items:data})
        }
   })
   
}


exports.update = (req,res)=>{
    const id = req.params.id;

         
   user.findOneAndUpdate({_id:id},req.body,{new:true},(err,data)=>{
    if(err){
        return req.status(500).json({
            message:err
        })
    }else{
        res.render('update.ejs',{docs:data})
    }
})


}

exports.deleted = (req,res)=>{
    const id = req.params.id;

    user.findByIdAndDelete(id,(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/post/read")
        }
    })
}

exports.upd = (req,res)=>{
    const id = req.params.id;

    user.findByIdAndUpdate({_id:id},req.body,(err,docs)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/post/read")
    })

}