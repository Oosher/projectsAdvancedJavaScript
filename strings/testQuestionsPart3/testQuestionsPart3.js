
let numberPhone ="0506233330";




console.log(israelPhone(numberPhone));

function israelPhone(phoneNumber){

    if(!phoneNumber.includes("+972")){
        return "+972"+phoneNumber;
    }

    else{
        return phoneNumber
    }
}

let password= "AFG#Gd3s$aa1d" ;

console.log(passwordCheck(password));


function passwordCheck(pass){

    if(pass.length>8&&pass.length<15){

        let lowerCase=false;
        let upperCase=false;

        for (let i = 0; i < pass.length; i++) {
            if (pass.charAt(i)==pass.charAt(i).toUpperCase()) {
                
                upperCase=true;

            }
            console.log(pass.charAt(i));
            if (pass.charAt(i)==pass.charAt(i).toLowerCase()) {
                
                lowerCase=true;

            }
            if (upperCase&&lowerCase) {
                break;
                
            }

            if (i==pass.length-1) {
                
                return false
                
            }
        }

        if (/\d/.test(pass)) {
            

            if (pass.includes("$")||pass.includes("%")||pass.includes("@")||pass.includes("#")) {
                
                return true;

            }
            
            else{

                return false;

            }

        }
        else{

            return false;

        }


    }
    else{
        return false;
    }
}


let philndrome = "aadddaa";


console.log(ifPalindrome(philndrome));

function ifPalindrome(word){
    let firstHalf="";
    let secondHalf="";

    for (let i = 0; i < word.length/2; i++) {
        firstHalf+=word.charAt(i);
        
    }

    for (let j = word.length; j > word.length/2-1; j--) {
        
        secondHalf+=word.charAt(j);
        
    }



    console.log(firstHalf+" "+secondHalf);


    if (firstHalf==secondHalf) {

        return true;
        
    }
    else{

        return false;
        
    }

}



printingPalindrome(philndrome);

function printingPalindrome(word) {

   if(ifPalindrome(word)){

    console.log("The word is a Palindrome");

   }
   else{

     console.log("The word is not a Palindrome");

   }

   if (word.length%2==0) {
    
    console.log("And the word is even");

   }



   else{

    console.log("And the word is odd");

   }
}