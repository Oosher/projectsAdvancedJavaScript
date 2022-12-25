"use strict";
//type - any
let a;
a = 435;
a = "suiiii";
a = true;
let arrayOfAny = [];
arrayOfAny.push(35);
arrayOfAny.push("gffd");
let anyStudent;
//functions 
let hello = () => {
    console.log("Hello");
};
hello();
let newFunction;
newFunction = () => {
    console.log(a);
};
newFunction();
//define type of args
let addNums = (num1, num2) => {
    console.log((num1 % num2));
};
addNums(7, 4);
//define optional arguments
let addNums2 = (a, b, c) => {
    console.log(a / b);
    console.log(c);
};
//c is optional so you don't have to input it when you call the function
addNums2(45, 23);
//default value
let addNums3 = (a, b, c = 10) => {
    console.log(a / b * c);
};
addNums3(1, 6, 7);
//function type
let addNums4 = (num1, num2) => {
    return num1 - num2;
};
