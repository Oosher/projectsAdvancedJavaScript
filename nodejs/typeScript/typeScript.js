console.log("hello");
//variables
var a = 15;
var b = "shalom";
var c = true;
/*
cannot change a from number to string
a = "david"
*/
var d;
d = 15;
// bad example 
var myFunction = function (value) {
    return value * 100;
};
console.log(myFunction("hello"));
//good example 
var myFunction2 = function (value) {
    return value * 100;
};
console.log(myFunction2(25));
