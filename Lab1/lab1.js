const questionOne = function questionOne(arr) {
    let answer =0;
    for(let i=0;i<arr.length;i++){
        answer+=arr[i]*arr[i];
    }
    return answer;
}

const questionTwo = function questionTwo(num) { 
    let f0 = 0;
    let f1 = 1;
    let f2 = 0;
    if(num == 1)return 1;
    if(num < 1)return 0;
    for(let i=2;i<=num;i++){
        f2 = f1+f0;
        f0 = f1;
        f1 = f2;
    }
    return f2;
}

const questionThree = function questionThree(text) {
    let vowels = new Set(['a','e','i','o','u']);
    let str = text.replace(/[^a-z]+/ig,"");
    let answer = 0;
    for(let i=0;i<str.length;i++){
        if(vowels.has(str[i].toLowerCase())){
            answer++;
        }
    }
    return answer;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    let answer = 1;
    if(num <0)return NaN;
    while(num > 0){
        answer *= num;
        num -= 1;
    }
    return answer;
}

module.exports = {
    firstName: "Zhou", 
    lastName: "Weijia", 
    studentId: "10429862",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};