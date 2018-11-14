const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const data = require("./data");
const usersInfo = data.users;
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const bcrypt = require("bcrypt");

//we can't use this, or it wil lead us to the router
// configRoutes(app); 


app.get("/logout",function(req,res,next){
    res.clearCookie('AuthCookie');
    res.clearCookie('userData');
    res.redirect('/');
})


app.get("/private", function(req,res,next){
    if(req.cookies.AuthCookie == "authenticated"){
        res.render("private",{userInfo:req.cookies.userData});
    }else{
        res.status(403).send("not login")
    }
})

app.post('/login', async function(req,res,next){
    let getUsername = req.body.username;
    let getPassword = req.body.password;
    let allUsers = usersInfo.users;


    for(let i=0;i<allUsers.length;i++){
        var getUser = allUsers[i];
        if(getUser.username == getUsername  ){
            let compare = await bcrypt.compare(getPassword, getUser.HashedPassword);
            if(compare){
                res.cookie('AuthCookie','authenticated',{ maxAge: 3600000 });
                res.cookie('userData',getUser);
                res.redirect('/private');
                return;
            }else{
                res.status(403).render("login",{error:"Sry, you did not provide the valid Password"});
                return;
            }
        }
    }
    res.status(403).render("login",{error:"Sry, you did not provide the valid username"});
});


app.get("/",function(req,res,next){
    if(req.cookies.AuthCookie == "authenticated"){
        res.redirect('/private');
    }else{
        res.render("login",{});
    }
});


app.listen(3000, function() {
    console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");

    if (process && process.send) process.send({done: true}); 
});