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

    text = text.toLowerCase();
    let totalLetters = 0;
    for(let i=0;i<text.length;i++){
        if(/[a-z]/i.test(text[i])){
            totalLetters++;
        
            if(text[i] =='a' || text[i]=='e'|| text[i]=='i' || text[i]=='o' || text[i]=='u'){
                metricsObj.totalVowels++;
            }else{
                metricsObj.totalConsonants++;
            }
        }

    }
    metricsObj.totalLetters = totalLetters;
    metricsObj.totalNonLetters = text.length - totalLetters;
    
    let str = text;
    str = str.split(/\s+/);
    let word = [];
    
    let totalwords = 0;
    for(let i=0;i<str.length;i++){
        arr = [];
        for(let j=0;j<str[i].length;j++){
            if(/[a-z]/i.test(str[i][j])){
                arr.push(str[i][j]);
            }
        }
        if(arr.length!==0){
            word.push(arr.join(""));
            totalwords++;
        }
    }

    metricsObj.totalWords = totalwords;

    let set = new Set();
    for(let i=0;i<word.length;i++){
        set.add(word[i]);
        if(word[i].length >=6){
            metricsObj.longWords++;
        }

        if(metricsObj.wordOccurrences.hasOwnProperty(word[i])){
            metricsObj.wordOccurrences[word[i]]++;
        }else{
            metricsObj.wordOccurrences[word[i]] = 1;
        }
    }
    metricsObj.uniqueWords = set.size;
    metricsObj.averageWordLength = (metricsObj.totalLetters / metricsObj.totalWords).toFixed(2);
    
    console.log(metricsObj);
    return metricsObj;
    


}
var testText = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23 don't";
//  var testText = "But she was prejudiced in Wendy's favour, ";
createMetrics(testText);

module.exports={
    createMetrics
};