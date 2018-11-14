function equ(obj1,obj2){
    // console.log(arguments.length);
    if(arguments.length <2){
        throw "less";
    }else if(typeof obj1 !== "object" || typeof obj2 !== "object"){
        throw `${obj1 || obj2} is not an object`;
    }else{
        // console.log("1");
        console.log(compare(obj1,obj2));
    }
function compare (x, y) {
    let p
  
    if (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)) {
      return true
    }
  
    if (x === y) {
      return true
    }
  
    // if (typeof x === 'function' && typeof y === 'function') {
    //   if ((x instanceof RegExp && y instanceof RegExp) ||
    //   (x instanceof String || y instanceof String) ||
    //   (x instanceof Number || y instanceof Number)) {
    //     return x.toString() === y.toString()
    //   } else {
    //     return false
    //   }
    // }
    if (typeof x === 'function' && typeof y === 'function') {
        return x.toString() === y.toString()
    }
  
    if (x instanceof Date && y instanceof Date) {
      return x.getTime() === y.getTime()
    }
  
    if (!(x instanceof Object && y instanceof Object)) {
      return false
    }
  
    if (x.prototype !== y.prototype) {
      return false
    }
  
    if (x.constructor !== y.constructor) {
      return false
    }
  
    for (p in y) {
      if (!x.hasOwnProperty(p)) {
        return false
      }
    }
  
    for (p in x) {
      if (!y.hasOwnProperty(p)) {
        return false
  
    }
  
      if ( y[p] !==  x[p]) {
        return false
      }
  
      if (!compare(x[p], y[p])) {
        return false
      }
    }
  
    return true
  }
}
 
  const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const four = {a: 2, b: function zz(){console.log(11)}};
const five = {a: 2, b: function zz(){console.log(11)}};

// try{
//     equ(first,third);
// }catch(e){
//     console.log(e);
// }


// try{
//     equ(second,third);
// }catch(e){
//     console.log(e);
// }

// try{
//     equ(four,five);
// }catch(e){
//     console.log(e);
// }

// console.log(five.b.toString() === four.b.toString());
// console.log(typeof four.b);

// function zz(){
//     console.log(111);
// }
// function zz(){
//     console.log(1111);
// }
// console.log(zz.toString() === zz.toString());
// const obj = {z:function h(){console.log(11)}};

// console.log(obj.z);




// public int FindMinSlice (List<List<Integer>> Matrix)
// {
//   int rows=Matrix.size(); 
//   if(rows==0)return 0;
//   int columns=Matrix.get(0).size(); 
//   if(columns==0)return 0;
//   int sliceSum[]=new int[columns]; 
//   for(int i=0;i<columns;i++)
//   sliceSum[i]=Matrix.get(rows-1).get(i);
//   for(int i=rows-2;i>=0;i--) 
// {
//   for(int j=columns-1;j>=0;j--) {

// if(j==columns-1)
// sliceSum[j]=Math.min(sliceSum[j-1],sliceSum[j])+Matrix.get(i).get(j);
// else if(j==0)
// sliceSum[j]=Math.min(sliceSum[j],sliceSum[j+1])+Matrix.get(i).get(j);
// else
// sliceSum[j]=Math.min(sliceSum[j-1],Math.min(sliceSum[j],sliceSum[j+1]))+Matrix.get(i).get(j);
// }
// }
// int minSliceSum=sliceSum[0]; // current minimum sliceSum
// for(int i=1;i<columns;i++)
// minSliceSum=Math.min(minSliceSum,sliceSum[i]); // update the minimum sliceSum if required
// return minSliceSum;
// }
var obj = { a:1, arr: [2,3] };
var shallowObj = shallowCopy(obj);

function shallowCopy(src) {
  var dst = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}

console.log(shallowObj);

function func(){
  var test = 1;
  console.log(test);

};
func();