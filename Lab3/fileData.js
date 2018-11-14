const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path){
    let data;
    try{
        if(path === undefined || typeof path !== "string"){
            throw "input path is invalid";
        }
         data = await fs.readFileAsync(path,'utf8');
    }catch(e){
        console.log(e);
    }
    // console.log(data);
    return data;
}

async function getFileAsJSON(path){
    let data;
    let dataObj;
    try{
        if(path === undefined || typeof path !== "string"){
            throw "input path is invalid";
        }
        data = await fs.readFileAsync(path,'utf8');
        dataObj = JSON.parse(data);
    }catch(e){
        console.log(e);
    }
    // console.log(dataObj);
    return dataObj;
}

async function saveStringToFile(path,text){
    try{
        if(path === undefined || typeof path !== "string"){
            throw "input path is invalid";
        }
        if(text === undefined || typeof text !=="string"){
            throw "input text is invalid";
        }
        await fs.writeFileAsync(path,text);
    }catch(e){
        console.log(e);
    }
    return true;
}

async function saveJSONToFile(path,obj){
    let text;
    try{
        if(path === undefined || typeof path !== "string"){
            throw "input path is invalid";
        }
        if(obj === undefined || typeof obj !=="object"){
            throw "input obj is invalid";
        }
        text = JSON.stringify(obj);
        await fs.writeFileAsync(path,text);
    }catch(e){
        console.log(e);
    }
    return true;
}

// getFileAsString(1);

module.exports={
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
};