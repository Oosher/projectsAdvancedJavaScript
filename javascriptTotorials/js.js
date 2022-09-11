//variables :

let firstVar ="Mashu";
const id="029302930219323";


//can be defined twice:

var x=5;

var x=10;



//examples :

let  number = 10;

let result =0 ;


result+= number;

console.log(result);

//operators + - * / % 


number = 12389;

//result = 9
result =number%10;



//functions :

function functionName(){

}

//function with parameters 

function functionName2(item1,item2,item3){

}


//return function

function functionName3(item1,item2,item3){


    return item1+item2+item3;

}


//Arrays :

//before push
const array = ["item1","item2","item3"];
array.push("item4");

console.log(array);

//before pop "item1","item2","item3","item4"

array.pop();

console.log(array);

//after pop "item1","item2","item3"

//Objects:

const firstObject = {

    name:"yusef",
    lastName : "shimonove",

}

firstObject.lastName+=" Bruh what are you doinn?";


const date = new Date();


//Basic operations : 
//AND : &&  OR : || > < == ===
if (number > result) {
    
}
else{
    
}

switch (number) {
    case 23:
        result = number;
        break;

    case 27: 
        result = number - result;
        break;

    default:
        break;
}

//Loops :

//for 
for (let i = 0; i < 10; i++) {

    
}


for (const key in firstObject) {
        console.log("key: "+firstObject[key]);
}


for (let i = 0; i < 22; i++) {

   console.log(i);

   if (i>6) {
    break; 
   }
    
}

console.log(": :");

for (let i = 0; i <  10; i++) {

if (i==6) {
    console.log("no 6");
    continue;
   }

console.log(i);

   
    
}

let a = "10";
//not exactly equals 
if (a==10) {
    console.log("yes");
}

//exactly equals
if (a===10) {
    console.log("yes");
}
//while :

while (x!=3) {
    x= prompt("enter number");

    console.log(x);
}


do {
    let x= prompt("enter number");

    console.log(x);
    
} while (x!=3);