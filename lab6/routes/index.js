const MyInfo = require("./posts");

const constructorMethod = app =>{
    app.use("/",MyInfo);

    app.use("*",(req,res)=>{
        res.status(404).json({error:"Not Found"});
    });
};

module.exports = constructorMethod;