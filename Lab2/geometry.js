function volumeOfRectangularPrism(length, width, height){
    if(arguments.length <3 ){
        let num = 3 -arguments.length;
        throw "Missing"+ " "+ num +" "+ "arguments";
    }

    // if(length == undefined  ||  width == undefined ||  height == undefined){
    //     // throw `${length || width || height} is undefined`;
    //     console.log(yes);
    // }

    if(typeof length !== "number"  || typeof width !== "number" || typeof height !== "number"){
            throw `${length || width || height} is not a number`;
    }

    if(length <0 || width <0 || height <0){
        throw `${length || width || height} is not in the proper bounds`;
    }
    

    return length * width * height;
    
}

function surfaceAreaOfRectangularPrism(length, width, height){
    if(arguments.length <3 ){
        let num = 3 -arguments.length;
        throw "Missing"+ " "+ num +" "+ "arguments";
    }

    if(typeof length !== "number"  || typeof width !== "number" || typeof height !== "number"){
            throw `${length || width || height} is not a number`;
    }

    if(length <0 || width <0 || height <0){
        throw `${length || width || height} is not in the proper bounds`;
    }

    return (length * width * 2) + (length * height *2) + (width * height *2); 
}

function volumeOfSphere(radius){
    const pi = Math.PI;

    if(arguments.length <1 ){
        let num = 1 -arguments.length;
        throw "Missing"+ " "+ num +" "+ "arguments";
    }

    if(typeof radius !== "number"){
        throw `${radius} is not a number`;
    }

    if(radius <0){
        throw `${radius} is not in the proper bounds`;
    }


    return 4/3 * pi * radius * radius * radius;
}

function surfaceAreaOfSphere(radius){
    const pi = Math.PI;
    if(arguments.length <1 ){
        let num = 1 -arguments.length;
        throw "Missing"+ " "+ num +" "+ "arguments";
    }
    
    if(typeof radius !== "number"){
        throw `${radius} is not a number`;
    }

    if(radius <0){
        throw `${radius} is not in the proper bounds`;
    }

    return 4 * pi * radius * radius;
}

module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};