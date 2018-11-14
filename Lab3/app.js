var fileData = require("./fileData");
var testMetrics = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

//file location
var chapter1Path = "chapter1.txt";
var chapter2Path = "chapter2.txt";
var chapter3Path = "chapter3.txt";
var c1ResultPath = "chapter1.result.json";
var c2ResultPath = "chapter2.result.json";
var c3ResultPath = "chapter3.result.json";


async function main(path,resultPath){
    if(path === undefined || typeof path !== "string"){
        throw `${path} is not right path`;
    }
    if(resultPath ===undefined || typeof resultPath !=="string"){
        throw `${resultPath} is not right resultPath`;
    }
    let fileExists = false;
    try{
        await fs.statAsync(resultPath);
        fileExists = true;
    }catch(e){
        fileExists=false;
    }
    if(fileExists){
        let getFileAsJSONResult = await fileData.getFileAsJSON(resultPath);
        console.log(getFileAsJSONResult);
    }else{
        let getFileAsStringResult = await fileData.getFileAsString(path);
        let metricsResult = testMetrics.createMetrics(getFileAsStringResult);
        await fileData.saveJSONToFile(resultPath,metricsResult);
        console.log(metricsResult);
        console.log("Finished!");
        return null;
    }
}
//chapter1
main(chapter1Path,c1ResultPath).catch(err=>{
    console.log(err);
})

//chapter2
main(chapter2Path,c2ResultPath).catch(err=>{
    console.log(err);
})

//chapter3
main(chapter3Path,c3ResultPath).catch(err=>{
    console.log(err);
})

// main("test.txt","testResult.json").catch(err=>{
//     console.log(err);
// })


// async function main1(){
//     let a = await fileData.getFileAsString("test.txt");
//     let b = testMetrics.createMetrics(a);
//     console.log(b);
// }
// main1("test.txt","testRe.txt").catch(err=>{
//     console.log(err);
// })

