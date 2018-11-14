const lab1 = require("./lab1");

console.log("These are questionOne test cases");
console.log(lab1.questionOne([1, 2, 3])); 
// should output 14
console.log("[5,3,10]:" + " "+lab1.questionOne([5,3,10])); 
console.log("[2,1,2]:" + " "+lab1.questionOne([2,1,2])); 
console.log("[5,10,9]:" + " "+lab1.questionOne([5,10,9])); 
console.log("[6,2,1]:" + " "+lab1.questionOne([6,2,1])); 


console.log("These are Fibonacci test cases");
console.log(lab1.questionTwo(7)); 
// should output 13 
console.log("Fibonacci(-10):" + " "+lab1.questionTwo(-10)); 
console.log("Fibonacci(1):" + " "+lab1.questionTwo(1)); 
console.log("Fibonacci(3):" + " "+lab1.questionTwo(3)); 
console.log("Fibonacci(8):" + " "+lab1.questionTwo(8)); 
console.log("Fibonacci(11):" + " "+lab1.questionTwo(11)); 

console.log("These are questionThree test cases");
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// should output 196


console.log("These are questionFour test cases");
console.log(lab1.questionFour(10)); 
// should output 3628800 
console.log("Number(-1):" + " "+lab1.questionFour(-1)); 
console.log("Number(-10):" + " "+lab1.questionFour(-10)); 
console.log("Number(0):" + " "+lab1.questionFour(0)); 
console.log("Number(1):" + " "+lab1.questionFour(1)); 
console.log("Number(3):" + " "+lab1.questionFour(3)); 
console.log("Number(5):" + " "+lab1.questionFour(5)); 

 