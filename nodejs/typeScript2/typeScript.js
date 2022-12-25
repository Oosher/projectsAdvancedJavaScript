//type - any
var a;
a = 435;
a = "suiiii";
a = true;
var arrayOfAny = [];
arrayOfAny.push(35);
arrayOfAny.push("gffd");
var anyStudent;
//functions 
var hello = function () {
    console.log("Hello");
};
hello();
var newFunction;
newFunction = function () {
    console.log(a);
};
newFunction();
//define type of args
var addNums = function (num1, num2) {
    console.log((num1 % num2));
};
addNums(7, 4);
//define optional arguments
var addNums2 = function (a, b, c) {
    console.log(a / b);
    console.log(c);
};
//c is optional so you don't have to input it when you call the function
addNums2(45, 23);
//default value
var addNums3 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a / b * c);
};
