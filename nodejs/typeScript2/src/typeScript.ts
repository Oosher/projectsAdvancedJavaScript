
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






let array =[ 2,3,5,6,7,8,9,0,4,5];

function twoAddedNumbers(array:number[],sumValue:number){
    
    
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length; j++) {
            
            if ((array[i]+array[j])==sumValue) {
                
                return array[i]+" "+array[j];
                
            }
            
        }
        
    }
    
    return null;
    
}




console.log(twoAddedNumbers(array,5));






//interface 


interface student {
    name:string;
    age:number;
    sayHellow:()=> void ;
        
    
};


//type definition

type studentType = {
    name:string;
    age:number;
};


const newFunction2 = (student:{name:string;age:number;})=>{

    console.log("hello i am " + student.name);

}



const student = {

    name:"233",age:23

}
newFunction2(student);


class Exchange {

    symbol:string;

    lastPrice:number;

    volume:number;

    priceChangePrecent:number;

    constructor (symbol:string,lastPrice:number,volume:number,priceChangePrecent:number){

        this.symbol=symbol;

        this.lastPrice=lastPrice;

        this.priceChangePrecent = priceChangePrecent;

        this.volume = volume;

    }

}

//class task 2 


class bankAccount {

    checkingAccount:number ;

    belongsTo:string;



    constructor (checkingAccount:number,belongsTo:string){

        this.checkingAccount= checkingAccount;

        this.belongsTo= belongsTo;
        

    }

    getBalance(){

        return this.checkingAccount;

    }

    addBalance(amount:number){

        this.checkingAccount+=amount;

    }

    withdraw(amount:number){
        

        if(this.checkingAccount-amount<0){
            console.log("you cannot withdraw more than you have in this account");
            
        }
        else{
        this.checkingAccount-=amount;
    }

    }

}


let newBankAccount = new bankAccount(23245,"yusef");


newBankAccount.addBalance(10000);

newBankAccount.withdraw(2000000000);


console.log(newBankAccount.getBalance());





