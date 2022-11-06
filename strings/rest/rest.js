
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