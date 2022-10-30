


//1:

function israelPhone(phoneNumber){
 
    let newPhoneNumber = phoneNumber.replaceAll("-","");

    //option 2
/*     let newPhoneNumber=phoneNumber;
    newPhoneNumber=newPhoneNumber.split("-");
    console.log(newPhoneNumber);
    newPhoneNumber=newPhoneNumber.join("");
    console.log(newPhoneNumber); */
    //end of option 2

    newPhoneNumber=newPhoneNumber.slice(newPhoneNumber.length-9,newPhoneNumber.length);

    return "+972"+newPhoneNumber;
    
/*     if(!phoneNumber.includes("+972")){
        return "+972"+newPhoneNumber;
    }

    else{
        return newPhoneNumber
    } */

}



let arrayOfPhoneNumbers =["+972526788987","+972-52-6256276","0527878907","052-8976635"];

function fixStandardPhoneNumberArray(phoneArray) {

    let fixedPhoneArray=[];

    for (let i = 0; i < phoneArray.length; i++) {
        
    
       fixedPhoneArray.push(israelPhone(phoneArray[i]));

    }
    return fixedPhoneArray; 
    
}


console.log(fixStandardPhoneNumberArray(arrayOfPhoneNumbers));


//option 2:

//let newArray = arrayOfPhoneNumbers.map(fixStandardPhoneNumberArray(phone));

//:2


function Movie(name,lengthMinutes,category,price) {
    this.name=name;

    this.lengthMinutes=lengthMinutes;

    this.category=category;

    this.price=price;

}

const movies = [];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie ("heart", 85, "drama", 40));
movies.push(new Movie ("unholy", 100, "horror", 32));
movies.push(new Movie ("blonde", 135, "drama", 25));
movies.push(new Movie ("me time", 92, "comedy", 30));
movies.push(new Movie ("choose or die", 118, "horror", 36));
movies.push(new Movie ("red note", 110, "comedy", 40));




console.log(chooseGaner(movies,"comedy"));


function chooseGaner(movieArray,ganer){



let allMoviesFromeGaner = [];

    for (let i = 0; i < movieArray.length; i++) {
        
        if ( movieArray[i].category==ganer) {

            allMoviesFromeGaner.push(movieArray[i]);
            
        }
        
    }

    if (allMoviesFromeGaner.length>0) {

        return allMoviesFromeGaner;

    }
    else{

        return"We don't have any movies from your chosen ganer";
        
    }


}



//option 2 :

/* let cosenCategory ="comedy";

let chosenCategory = movies.filter((movie)=>{

    return movie.category==cosenCategory;
})

 */

//3:
const arrayOfWords = ["hello","Please","thanks","Home","great"];

console.log(capitalizeFirstLetter(arrayOfWords));

function capitalizeFirstLetter(wordArray) {
    
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].replace(wordArray[i].charAt(0),wordArray[i].charAt(0).toUpperCase());
        
    }

    return wordArray;   

}

//option 2:

/* 
let newWordArray = arrayOfWords.map((word)=>{

    return word[0].toUpperCase()+word.slice(1);

})
 */

//4:

let arrayOfNums = [1,44,3,56,77,856,4,33,2,55,6,99,88];

console.log(sortWithoutSort(arrayOfNums));

function sortWithoutSort(numberArray){

    let notSorted=1;
    let tempHolder;

    while (notSorted!=0) {
            
            notSorted=0;

        for (let i = 0; i < numberArray.length-1; i++) {

            if (numberArray[i]<numberArray[i+1]) {

                tempHolder=numberArray[i];

                numberArray[i]=numberArray[i+1];

                numberArray[i+1]=tempHolder;
            
                notSorted++;
                
            }

        }
    }
    
  


    
    return numberArray;

}


//easy way:

/* let newArrayOfNums = arrayOfNums.sort((a,b)=>{

    return b-a;

});
 */
