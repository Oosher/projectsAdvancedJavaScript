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
var arrayOfNames = ["yosh", "mosh", "kosh"];
arrayOfNames.push("totes");
/*
will not work because its an array of string
arrayOfNames.push(2133);
arrayOfNames[0]= 23134;
 */
//combined array
//array of strings and numbers
var data = ["dasdas", "asdasdsad", 123122321];
function towNumberSum(num1, num2) {
    return num1 + num2;
}
console.log(towNumberSum(4, 9));
//objects
var student = {
    fullName: "mimon",
    age: 30
};
/*
Type 'string' is not assignable to type 'number'

student.age="43";
 */
/*
Property 'grade' does not exist on type '{ fullName: string; age: number; }'

student.grade =200;
*/
/*
Property 'age' is missing in type '{ fullName: string; }' but required in type '{ fullName: string; age: number; }

student = {
    fullName:"shimo",
    
} */
//explicit type
var intType;
var stringType;
//explicit array type
var newStringArray = [];
newStringArray.push("hello");
//explicit object type
var newObject;
newObject = {
    fullName: "shimshi",
    age: 57
};
//union types
var object3;
var newVariable;
