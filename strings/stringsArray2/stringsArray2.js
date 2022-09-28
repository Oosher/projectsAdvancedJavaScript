
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