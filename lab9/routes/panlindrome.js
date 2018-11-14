const express = require("express");
const router = express.Router();
// const data = require("../data");
// const panlindrome = data.panlindrome;

router.get("/",(req,res)=>{
    res.render("results/static",{});
});

module.exports = router;