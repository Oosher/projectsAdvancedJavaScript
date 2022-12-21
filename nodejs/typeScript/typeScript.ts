
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


