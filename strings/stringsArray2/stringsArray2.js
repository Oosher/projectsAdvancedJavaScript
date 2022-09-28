
// indexOf() :

let array=[2,3,4,5,2,4,5,3,5,6,5,4,3,4,5,4,3,4,5,4,3,4,5];

console.log(array.indexOf(5));




let stringA="gba halah lavbvoda yvia leosher matana";

removeAFromeTheString(stringA);

function removeAFromeTheString(string){

    let newString =string;

    while (newString.indexOf("a")!=-1) {

        newString=newString.replace("a","");

    }
    
    console.log(newString);
}


// slice() :

let array2=[2,3,4,5,2,4,5,3,5,6,5,4,3,4,5,4,3,4,5,4,3,4,5];

let sliceArray = array2.slice(4,8);


console.log(sliceArray);

//exercise :

//option 1:
let arrayEx=[2,3,4,4,2,4,5,5];


console.log(midArray(arrayEx)); 

function midArray(array){
let newArr;
    if (array.length%2==0) {
        newArr=array.slice((array.length/2)-1,(array.length/2)-1+2); 
    
    }

    else{
        newArr=array.slice(Math.round(array.length/2)-2,Math.round(array.length/2)-2+3); 
        console.log(Math.round(array.length/2));
    }

    return newArr;
}

//option 2:

console.log(middleOfArray(arrayEx));

function middleOfArray(array){
    
    if (array.length%2==0) {
        let indexOfMiddle =array.length/2 -1;
        return array.slice(indexOfMiddle,indexOfMiddle+2);
    }

    else{
        let indexOfMiddle =array.length/2 -1.5;
        return array.slice(indexOfMiddle,indexOfMiddle+3);
    }

}


// find functions 

 let array3 =[2,33,44,55,66,77,88,99,66,55,44,33,66];

 let finedArray = array3.find(findOver20);

 console.log(finedArray);

 function findOver20(number) {
    return number>20;
 }

let arrayOfStudents = [
  { fullName: "tzach", id: "15181891", avg: 100 },
  { fullName: "dabush", id: "sdf2r2345", avg: 82 },
  { fullName: "ilan", id: "3453", avg: 39 },
  { fullName: "avram", id: "345345", avg: 61 },
  { fullName: "david", id: "345345", avg: 94 },
];


//option 1:
-
console.log(studentAverageAbove80(arrayOfStudents));

function studentAverageAbove80(students) {
    let array=[];

    for (let i = 0; i < students.length; i++) {
        if (students[i].avg>=80) {
           array.push(students[i])
        }
        
    }
    return array;
    
}

// option 2 :
console.log(arrayOfStudents.find(filterStudentsAbove80) ,arrayOfStudents.filter(filterStudentsAbove80));

function filterStudentsAbove80(student){
    return student.avg>=80

}


//split function

//splits a string into an array


let stringSplit = "hello ma brudars";

let splittedString = stringSplit.split(" ",2);
console.log(splittedString);


