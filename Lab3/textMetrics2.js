function createMetrics(text){
    var metricsObj ={
        totalLetters:0,
        totalNonLetters:0,
        totalWords:0,
        totalVowels:0,
        totalConsonants:0,
        uniqueWords:0,
        longWords:0,
        averageWordLength:0,
        wordOccurrences:{}
    };

    if (text === undefined || typeof text !== 'string') {
        throw 'text must be string';
    }

    let pattern = new RegExp(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|/\n/|/\t/|/\d+/]/g);
    // let textNoMarks = text.replace(pattern," ").replace(/^\s+|\s+$/g,"").toLowerCase();//去除首尾空格

    // don't =>dont and to-do=>to  do
    //let pattern = new RegExp(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\,|\<|\.|\>|\/|\?|/\n/|/\t/|/\d+/]/g);
    //let textNoMarks = text.replace(/[\']/,"").replace(pattern," ").replace(/^\s+|\s+$/g,"").toLowerCase();//去除首尾空格
    let textNoMarks = text.replace(pattern," ").replace(/^\s+|\s+$/g,"").toLowerCase();//去除首尾空格
    let pureText = textNoMarks.replace(/\s+/g,"");
    
  
    metricsObj.totalLetters = pureText.length;
    metricsObj.totalNonLetters = text.length - pureText.length;
    
    textArray =textNoMarks.split(/\s+/); 
    metricsObj.totalWords = textArray.length;
    // let countVowels = 0;;
    // let countConsonants = 0;
    for(let i=0;i<pureText.length;i++){
        let curChar = pureText.substr(i,1);
        if(curChar =='a' || curChar=='e'|| curChar=='i' || curChar=='o' || curChar=='u'){
            metricsObj.totalVowels++;
            // countVowels++;
        }else{
            metricsObj.totalConsonants++;
            // countConsonants++;

        }
    }
    // let longWord = 0;
    let set = new Set();
    for(let i=0;i<textArray.length;i++){
        set.add(textArray[i]);
        if(textArray[i].length >=6){
            metricsObj.longWords++;
            // longWord++;
        }

        if(metricsObj.wordOccurrences.hasOwnProperty(textArray[i])){
            metricsObj.wordOccurrences[textArray[i]]++;
        }else{
            metricsObj.wordOccurrences[textArray[i]] = 1;
        }
    }
    metricsObj.uniqueWords = set.size;
    metricsObj.averageWordLength = (metricsObj.totalLetters / metricsObj.totalWords).toFixed(2);
    
    // console.log(metricsObj);
    return metricsObj;
    


}
// var testText = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";
//  var testText = "But she was prejudiced in Wendy's favour, ";
// createMetrics(testText);

module.exports={
    createMetrics
};