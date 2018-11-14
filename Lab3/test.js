var str = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";
var str = str.toLowerCase();

str = str.split(/\s+/);
let word = [];
for(let i=0;i<str.length;i++){
    arr = [];
    for(let j=0;j<str[i].length;j++){
        if(/[a-z]/i.test(str[i][j])){
            arr.push(str[i][j]);
        }
    }
    if(arr.length!==0){
        word.push(arr.join(""));
    }
}
console.log(word);