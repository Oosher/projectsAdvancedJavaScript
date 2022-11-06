
//rest syntax  ,...  => the rest of teh info put into an array 


function introduce (firstName,lastName, ...moreInfo){


    console.log(firstName,lastName, moreInfo);

}




introduce("yosef"," gurevitch","haver shel","yoshi","shimon","amram");


//class task

console.log(maxNum(-3,-2,-4,-22,-2,-44,555,33,-2));


function maxNum(...nums) {

    let maxNumber = nums[0];

    for (let i = 0; i < nums.length; i++) {

        if (nums[i]>maxNumber) {

            maxNumber=nums[i];

        }
        
    }

    return maxNumber;

}




//spread syntax ... => spreading the array into single variables with a , separating them

let arrayOfNums =[1,2,3,4,5,6,7,8,9,0,9];

console.log(...arrayOfNums);


//dos not works with arrays without the spread function

console.log(Math.max(...arrayOfNums));


//class task 2

console.log(sum(2,3,4,45,15,15,125,12,5,2));

function sum(...nums) {

    numSum=0;

    for (let i = 0; i < nums.length; i++) {
        
        numSum+=nums[i];
        
    }
    
    return numSum;
    
}


//option 2 reduce


console.log(sum2(2,3,4,45,15,15,125,12,5,2));

function sum2(...nums) {

    numSum=nums.reduce((total,num)=>{
        return total+num;
    });

    return numSum;
    
}

//spread example 2


let myDetails = ["yoshi","gurbich","david ofnoim"];


introduction2(...myDetails);

function introduction2(firstName,lastName,company) {

    console.log(`my name is ${firstName} ${lastName} and i work in ${company}`);
    
}




//spread example 3

let myDateArray =[2020 , 11 , 12];

//will not work with normal array only when you spread the array with ...
let myDate = new Date(...myDateArray);

console.log(myDate);




//spread example 4


const array1=[3,4,5];

const array2 =[1,2,3,...array1];

//adds 2 arrays together 
let array3 = array2.concat(array1);

console.log(array2);

console.log(array3);

//class task 3

const a = [231,123,32,421,423];

const b = [2131,3213,434,22];

const c =  [...a,...b];

console.log(c);



//Destructuring 


const [num1,num2,num3,num4,num5] = [1,2,3,4,5];

console.log(num4);

const [firstName,lastName,...moreInfo]=["yosef"," gurevitch","haver shel","yoshi","shimon","amram"];

//rest on an Object 

const newObject = {
    firstName:"osef",
    lastName:"urevitch",
    company:"david ofnoim",
    employment:"musahnick",
    city:"tel aviv"
}


const {employment,company,...outerInfo} =newObject;

console.log(outerInfo);


function introduce3(firstName,lastName,...moreInfo) {

    console.log(moreInfo);

}


//spread example 5

//wrocng way of copping an object teh object will be the same object and when you change something inside the object it will chang it for all objects
/* const newObject2 = newObject; */

//teh right way of coping can object to a different object without making them the same object but making them tow separate objects with the same parameters 
const newObject2 ={...newObject};

newObject2.city="reashon leziyon";

console.log(newObject2);

//merge two object


const myNewObject ={ a:23 ,b:443}


const myNewObject2 = {a:46 ,c:43};

const myNewMergedObject = {...myNewObject,...myNewObject2};



console.log(myNewMergedObject);