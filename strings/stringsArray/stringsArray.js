

//splice array.splice(index,how many, itemIndex...,maney times)
let array = [1,2,34,6,4,7,8,9,7,65];


array.splice(5,4,"hey","tamtam",3);


console.log(array);


//returns items

let array2 = [1,2,34,6,4,7,8,9,7,65];

//retune the removed items
let removedItems = array2.splice(3,4)
console.log(removedItems);



//map() function


let array3 = [1,2,34,6,4,7,8,9,7,65];


/* for (let i = 0; i < array3.length; i++) {
   array3[i]=array3[i]*3;
    
} */

let resultArray = array3.map(multiplyBy8);



console.log(resultArray);
function multiplyBy8(number){
    


    return number*8;
}



let array4 = [1,2,34,6,4,7,8,9,7,65];

let resualtArray2 = array4.map(multyplayByNextItem);

console.log( resualtArray2 );

function multyplayByNextItem(number , index ,array){

    if (index < array.length-1) {
        return number*array[index+1];

    }
    else{
        return number * number;
    }
    

}


//array filter


let array5 = [1,2,34,6,4,7,8,9,7,65];

let resualtArray3 = array5.filter(biggerThan10);

console.log(resualtArray3);

function biggerThan10(number) {
return number>10



}


//index of finds the indx of a character that you put in

let array6 = [1,2,34,6,4,7,8,9,77,65];

console.log(array6.indexOf(77));