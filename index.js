// Code your solution in this file!
const returnFirstTwoDrivers= function returnFirstTwoDrivers(x){
    return ([x[0],x[1]])
}
const returnLastTwoDrivers= function (x){
    return([x[x.length-2],x[x.length-1]])
}
//adding the results of a function which is an array to another array
const selectingDrivers=[]
selectingDrivers[0]=returnFirstTwoDrivers
selectingDrivers[1]=returnLastTwoDrivers

//creates a function that returns a function and uses thatreturn function to multiply its value
function createFareMultiplier(y){
    return function faremultiplier(z){return z*y}
}

//creates a function that uses the function above to only take in a fare and double it 
const fareDoubler= function (a){
    return createFareMultiplier(2)(a)
}

//creates a function that uses a 2 argument function to only take one argument and triple its input
const fareTripler= function (b){
    return createFareMultiplier(3)(b)
}

//creates a function that checks of one the arguments passed as afunction meets a criteria and produces the result of that argument function based on its finding
function selectDifferentDrivers(c,d){
    if(d==returnFirstTwoDrivers){
        return returnFirstTwoDrivers(c)
    }else {return returnLastTwoDrivers(c)}
}