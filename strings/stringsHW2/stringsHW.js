

//1:

// finedIndexאני מבין שצריך להשתמש במה שלמדנו אבל לא ראיתי דרך שנראת הגיונית  וקצרה לעשות אותה בשימוש ב

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



//2:

let arrayOfText = ["sus","big","opos","Shmuel","Shimon","yosef","abrsam","single"]

let arrayWordsThatStartsWithS= arrayOfText.filter(findWordsThatStartsWithS);

console.log(arrayWordsThatStartsWithS);


function findWordsThatStartsWithS(text){

  return text.indexOf("s")==0||text.indexOf("S")==0;

}









//3:


let arrayOfLetters = ["S","v","b","F","Z","W","f","h","J","e","h"];

let ArrayOfCapitalLetters = arrayOfLetters.filter(onlyUpperCaseLetters);

console.log(ArrayOfCapitalLetters);


function onlyUpperCaseLetters(letters) {

  return letters.match(/[A-Z]/);

}


//4:

let arrayOfNumbers=[2,44,33,5,634,4,5,334,5,33,333,6];


includes3(arrayOfNumbers);

function includes3(array) {

let numToString;

  for (let i = 0; i < array.length; i++) {
    
    numToString = array[i].toString();

    if (numToString.indexOf("3")!=-1) {
      console.log("This array includes the nimber 3");
      return;
    }
    
  }
  
}

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




