
//type - any

let a: any;

a =435;
a="suiiii";
a= true;



let arrayOfAny : any [] = [];

arrayOfAny.push(35);

arrayOfAny.push("gffd");



let anyStudent :{
    name: any;
    age:any;

}



//functions 
let hello=()=>{

    console.log("Hello");
    


};

hello();



let newFunction : Function ;




newFunction = ()=>{

    console.log(a);
    

};


newFunction();



//define type of args


let addNums = (num1:number,num2:number)=>{

    console.log((num1%num2));

};



addNums(7,4);




//define optional arguments




let addNums2 = (a:number,b:number,c?:number|string)=>{

    console.log(a/b);

    console.log(c);
    
}

//c is optional so you don't have to input it when you call the function
addNums2(45,23);





//default value

let addNums3 = (a:number,b:number,c:number = 10)=>{

    console.log(a/b*c);
    
}


addNums3(1,6,7);


//function type


let addNums4 = (num1:number,num2:number):number =>{

    return num1-num2;

}

