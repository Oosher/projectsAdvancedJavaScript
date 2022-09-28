let array=[2,3,4,5,2,4,5,3,5,6,5,4,3,4,5,4,3,4,5,4,3,4,5];

console.log(array.indexOf(5));



//option 1:
let stringA="aba halah lavbvoda yvia leosher matana";

removeAFromeTheString(stringA);

function removeAFromeTheString(string){

    let newString =string;

    while (newString.indexOf("a")!=-1) {

        newString=newString.replace("a","");

    }
    
  
    

    console.log(newString);
}





//option 2:
