

//1:

// finedIndexאני מבין שצריך להשתמש במה שלמדנו אבל לא ראיתי דרך שנראת הגיונית  וקצרה לעשות אותה בשימוש ב

//option 1 - my way : 
let numArray = [1,3,44,55,6,14,23,14,553,2,6,567,23,1,3,5,6,7];

console.log(allHigherThan10(numArray));

function allHigherThan10(array){
let arrayOfIndex=[];

for (let i = 0; i < array.length; i++) {
  if (array[i]>10) {
    arrayOfIndex.push(i);
  }
  
}

return arrayOfIndex;

}

//option 2 - map :

let biggerThan10UsingMap = numArray.map(allHigherThan10Map);

console.log(biggerThan10UsingMap);


function allHigherThan10Map(number ,index,array){

  if (number>10) {
    return index;
  }
  


}

//option 3 - while findIndex :

let numArray2 = [1,3,44,55,6,14,23,14,553,2,6,567,23,1,3,5,6,7];
let tempArray = numArray2;
let arrayOfIndex2 = [];
while (numArray2.findIndex(ifBiggerThan10)!=-1) {

  let Index2 = tempArray.findIndex(ifBiggerThan10);
  arrayOfIndex2.push(Index2);
  tempArray[Index2]=0;


}

console.log(arrayOfIndex2);
console.log("hello");


function ifBiggerThan10(num) {
  return num>10;
}


//option 3 filter :

let numArray3 =[1,4,55,66,7,44];

let numArray3Filtered = numArray3.filter(filterBiggerThan10);

findFilteredInOriginalArray(numArray3Filtered,numArray3);

function findFilteredInOriginalArray(filteredArray,originalArray) {
  for (let i = 0; i < filteredArray.length; i++) {
  console.log(originalArray.indexOf(filteredArray[i]));
  
  }

}

 function filterBiggerThan10(number){
  return number>10;
 }


//2:

let arrayOfText = ["sus","big","opos","Shmuel","Shimon","yosef","abrsam","single"]

let arrayWordsThatStartsWithS= arrayOfText.filter(findWordsThatStartsWithS);

console.log(arrayWordsThatStartsWithS);


function findWordsThatStartsWithS(text){

  return text.indexOf("s")==0||text.indexOf("S")==0;

}


//option 2 - map :


arrayOfText.map(

  function startsWithS(text){
    if (text[0]=="s"||text[0]=="S") {

      console.log(text);
      
    }
  }

)







//3:


let arrayOfLetters = ["S","v","b","F","Z","W","f","h","J","e","h"];

let ArrayOfCapitalLetters = arrayOfLetters.filter(onlyUpperCaseLetters);

console.log(ArrayOfCapitalLetters);


function onlyUpperCaseLetters(letters) {

  return letters.match(/[A-Z]/);

}

//option 2 :

function onlyUpperCaseLetters2(letters) {

  return letters>="A" && letters<="Z";

}


//4:

let arrayOfNumbers=[2,44,33,5,634,4,5,334,53,33,333,36];


includes3(arrayOfNumbers);

function includes3(array) {

let numToString;

  for (let i = 0; i < array.length; i++) {
    
    numToString = array[i].toString();

    if (numToString.indexOf("3")!=-1) {
      console.log("This array includes the number 3");
      return;
    }
    
  }
  
}


//option 2 - map :

arrayOfNumbers.map(function includes3InTheNumber(number){

  if(number.toString().indexOf("3")!=-1){
    console.log("This array includes the number 3 2");
  

  }


});

//5:
console.log(howMany3inAnArray(arrayOfNumbers));
function howMany3inAnArray(array) {

let numToString;

let includes3Counter=0;

  for (let i = 0; i < array.length; i++) {

    numToString = array[i].toString();

    for (let j = 0; j < numToString.length; j++) {

        if (numToString[j]=="3") {
          includes3Counter++;
          
        }
      
    }
  
    
  }
  
  return includes3Counter;
  

}



// option 2 - split :


let splitArray = arrayOfNumbers.toString().split("");

console.log(splitArray3Counter(splitArray)+" option 2");
function splitArray3Counter(array){
  let splitCounter=0

  for (let i = 0; i < array.length; i++) {
    
    if (array[i]=="3") {
      splitCounter++;

    }
    
  }   

return splitCounter;

}

//option 3 - modulu % :
let allCounter = 0;
for (let g = 0; g < numArray.length; g++) {
  allCounter+= howMany3InANumberModulu(arrayOfNumbers[g]);
  
}
console.log(allCounter+" option 3");

function howMany3InANumberModulu(number) {

  let counter = 0;
  while (number>0){
    if (number%10==3) {
      counter++;
    }
    number = Math.floor(number/10) ;
   
  }
  
return counter;

}

