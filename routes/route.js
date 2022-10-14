
const express = require("express");
const router = express.Router();
const {creat , read, update,deleted,upd} = require("../controllers/controler.js")


router.route("/uda/:id").post(upd);
router.route("/create").post(creat);
router.route("/read").get(read);
router.route("/update/:id").get(update)
router.route("/delete/:id").get(deleted)
router.route("/add_user").get((req,re)=>{
    re.render('c')
})

router.route("/home").get((req,res)=>{
    res.send("hi");
})


module.exports = router;
