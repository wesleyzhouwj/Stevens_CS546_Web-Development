
const path = require("path");

const constructorMethod = app => {
  
  app.get("/", (req, res) => {
    // console.log("test");
    res.sendFile(path.resolve("static/main.html"));
  });

  app.post("/result", (req, res) => {
    //checking
    try{
    let textOri = req.body['text-to-test'];
    text = textOri.replace(/[^\w]|_/g,"").replace(/\s+/g,"").toLowerCase();
    let textArray = text.split("");
    let reverseArray = textArray.reverse();
    let reversedText = reverseArray.join("");
    let successOrNot;
    let introWrods;
    if(text.length === 0){
      successOrNot = "error";
      introWrods = "Ops, Error, Maybe you write an empty string!";
      res.status(400).render("answers/error", {result: {successFail:successOrNot,errorword:introWrods}});
      return;
      
    }else if(text === reversedText){
      successOrNot = "success";
      introWrods = "It is a Palindromes, congrats!";
    }else{
      successOrNot = "failure";
      introWrods = "Sry, It is not a Palindromes";
    }
    const result = {
      text: textOri,
      successFail: successOrNot,
      introduction:introWrods,
    }
    res.render("answers/results", {result: result});
  }catch(e){
    res.status(404).json({error: "page not found"});
  }

  });
  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;