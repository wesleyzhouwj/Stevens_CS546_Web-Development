const express = require("express");
const router = express.Router();
const data = require("../data");
const usersData = data;

router.get("/",(req,res)=>{

    res.send("router /");
});

router.post('/login',(req,res)=>{
    res.send("router login");
});


router.get("/private",(req,res)=>{
    res.send("hi");
});

router.get("/logout",(req,res)=>{
});

module.exports = router;