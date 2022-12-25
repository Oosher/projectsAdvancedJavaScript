
console.log("hello");

    
//variables

let a = 15;

let b = "shalom";

let c = true;


/* 
cannot change a from number to string  
a = "david" 
*/

let d: number;

d=15;

// bad example 


const myFunction = (value) =>{

    return value*100;
}



console.log(myFunction("hello"));


//good example 

const myFunction2 = (value:number) =>{

    return value*100;
}



console.log(myFunction2(25));


let arrayOfNames = ["yosh","mosh","kosh"];

arrayOfNames.push("totes");
/*
will not work because its an array of string 
arrayOfNames.push(2133);
arrayOfNames[0]= 23134;
 */

//combined array

//array of strings and numbers

let data = ["dasdas","asdasdsad",123122321];


function towNumberSum(num1:number,num2:number){

    return num1+num2;

}


console.log(towNumberSum(4,9));

//objects

let student = {
    fullName:"mimon",
    age:30,
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


let intType:number;

let stringType:string;


//explicit array type

let newStringArray:string[] = [];


newStringArray.push("hello");


//explicit object type

let newObject:{

    fullName:string;

    age:number;

}; 


newObject ={

    fullName:"shimshi",
    age:57,
    
}


//union types

let object3 :{
    fullName:string;
    age:number;
    id:number|string;
}

let newVariable:number | boolean;