

//1:



let array1 = [1,2,45,5,34,5325,5,562,6,99,88];

array1.splice(0,array1.length-2)
console.log(array1);


//2:

let array2 = [1,2,45,5,34,5325,5,562,6,99,88];

let changedArry = array2.map(powerBy2);


console.log(changedArry);






function powerBy2(number){
    return number*number;

}




//3:


let array3 = [1,2,45,5,34,5325,5,562,6,99,88];

let reversedArray = array3.map(reverseArray);

console.log(reversedArray);
function reverseArray(number,index,array){

/* let numberHolder=array[array.length-1-index];
console.log(numberHolder);
array[array.length-1-index]=number;
array[index]=numberHolder; */

return array[array.length-1-index];

}


//4:

let array4 =[1,2,3,4,5,6,7] ;


array4.splice(0,3,"x","y");


console.log(array4);





//5:

let array5 = [1,2,45,5,34,5325,5,562,6,99,88];


let evenArray = array5.filter(evenOnlyArray);


console.log(evenArray);

function evenOnlyArray(number){
return !(number%2);

// return number%2==0;

}

//6:

let array6 = [1,2,45,5,34,5325,5555,562,633,99,88];

let threeDigitsArray =  array6.filter(only3DigitsNumbers);

console.log(threeDigitsArray);

function only3DigitsNumbers(number) {

    return number>=100&&number<=999;

}

//7:

let array7 = ["avbasd","awewe","ewefdf","sdfsf","bfdgd","dsa","ewefdsf","dsad","sdfafb","dsadsa","weqwe"];

let aOrB =array7.filter(onlyBOrA); 

console.log(aOrB);
function onlyBOrA(number) {
   
  return number.indexOf("a")!=-1||number.indexOf("b")!=-1;
}

// 7 option 2:

/* function onlyBOrA(number) {
   
  return number.includes("a") || number.includes("b");
} */