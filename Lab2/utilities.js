function deepEquality(obj1, obj2){
    if(arguments.length <2){
        let num = 2 - arguments.length;
        throw "Missing" +" "+ num+" " + "Parameter";
    }else if(typeof obj1 !== "object" ){
        // throw `${obj1|| obj2} is not an object`;
        throw "obj1 is not an object";
    }else if(typeof obj2 !== "object"){
        throw "obj2 is not an object";
    }else{
        return compareObject(obj1,obj2);
    }

    function compareObject(ob1,ob2){
        if(typeof ob1 === "function" && typeof ob2 === "function"){
            return ob1.toString() === ob2.toString();
        }
        if (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)) {
            return true
        }

        if(ob1 === ob2){
            return true;
        }
        // if (!(ob1 instanceof Object && ob2 instanceof Object)) {
        //     return false
        // }

        // if(typeof ob1 === "function" && typeof ob2 === "function"){
        //     return ob1.toString() === ob2.toString();
        // }

        for(let ele in ob2){
            if(!ob1.hasOwnProperty(ele)){
                return false;
            }
        }

        for(let ele in ob1){
            if(!ob2.hasOwnProperty(ele)){
                return false;
            }
            if(ob2[ele] !== ob1[ele]){
                return false;
            }
            if (!compareObject(ob1[ele], ob2[ele])) {
                return false
              }

        }
        return true;

    }
}

function uniqueElements(arr){
    if(arguments.length<1){
        throw "Missing"+ " "+ 1 +" "+ "arguments";
    }
    if(!Array.isArray(arr)){
        throw "arr is not an Array";
    }
    let set = new Set();
    for(let i in arr){
        set.add(arr[i]);
    }
    return set.size;
}

function countOfEachCharacterInString(str){
    if(arguments.length < 1){
        throw "Missing"+ " "+ 1 +" "+ "arguments";
    }

    if(typeof str !== "string"){
        throw "str is not a String";
    }
    // let charMap = new Object();
    // for(let i in str){
    //     if(!charMap.hasOwnProperty(str.charAt(i))){
    //         charMap.str.charAt(i) = 1;
    //     }else{
    //         charMap.str.charAt(i) = charMap[str.charAt(i)]+1;
    //     }
    // }

    let map = new Map();
    let charMap = new Object();
    for(let i in str){
        if(!map.has(str.charAt(i))){
            map.set(str.charAt(i),1);
        }else{
            map.set(str.charAt(i),map.get(str.charAt(i))+1);
        }
    }

    for (var [key, value] of map) {
        // console.log(key + ' = ' + value);
        charMap[key] = value;
      }
    return charMap;
}

module.exports = {
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
}