const express = require("express");
const router = express.Router();
const data = require("../data"); 
const MyInfo = data.posts;
// const MyInfo = require("../data/posts"); 
//This one is still working!

router.get("/about",async (req,res)=>{
        // const aboutInfo = await MyInfo.getAbout();
        // if(typeof aboutInfo !== 'object'){
        //         res.status(404).json({error:'message'});
        // }else{
        //         res.json(aboutInfo);
        // }
        try{
                const aboutInfo = await MyInfo.getAbout();
                res.json(aboutInfo);
        }catch(e){
                res.status(404).json({error:'message'});
        }

});

router.get("/story", async (req,res)=>{
        // const storyInfo = await MyInfo.getStory();
        // if(typeof storyInfo !== 'object'){
        //         res.status(404).json({error:'message'});
        // }else{
        //         res.json(storyInfo);
        // }
        try{
                const storyInfo = await MyInfo.getStory();
                res.json(storyInfo);

        }catch(e){
                res.status(404).json({error:'message'});
        }
});

router.get("/education",async (req,res)=>{
        // const educationInfo = await MyInfo.getEducation();
        // if(typeof educationInfo !== 'object'){
        //         res.status(404).json({error:'message'});
        // }else{
        //         res.json(educationInfo);
        // }
        try{
                const educationInfo = await MyInfo.getEducation();
                res.json(educationInfo);
        }catch(e){
                res.status(404).json({error:'message'});
        }
});

module.exports = router;

