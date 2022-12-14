

/* 
new Date();

new Date(milliseconds);

new Date(dateString);

new Date(year, month, day, hours, minutes, seconds, milliseconds);

constructor	Returns the function that created the Date object's prototype
getDate()	Returns the day of the month (from 1-31)
getDay()	Returns the day of the week (from 0-6)
getFullYear()	Returns the year
getHours()	Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	Returns the minutes (from 0-59)
getMonth()	Returns the month (from 0-11)
getSeconds()	Returns the seconds (from 0-59)
getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
getUTCFullYear()	Returns the year, according to universal time
getUTCHours()	Returns the hour, according to universal time (from 0-23)
getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
getUTCMonth()	Returns the month, according to universal time (from 0-11)
getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
getYear()	Deprecated. Use the getFullYear() method instead
now()	Returns the number of milliseconds since midnight Jan 1, 1970
parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
prototype	Allows you to add properties and methods to an object
setDate()	Sets the day of the month of a date object
setFullYear()	Sets the year of a date object
setHours()	Sets the hour of a date object
setMilliseconds()	Sets the milliseconds of a date object
setMinutes()	Set the minutes of a date object
setMonth()	Sets the month of a date object
setSeconds()	Sets the seconds of a date object
setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
setUTCDate()	Sets the day of the month of a date object, according to universal time
setUTCFullYear()	Sets the year of a date object, according to universal time
setUTCHours()	Sets the hour of a date object, according to universal time
setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
setUTCMinutes()	Set the minutes of a date object, according to universal time
setUTCMonth()	Sets the month of a date object, according to universal time
setUTCSeconds()	Set the seconds of a date object, according to universal time
setYear()	Deprecated. Use the setFullYear() method instead
toDateString()	Converts the date portion of a Date object into a readable string
toGMTString()	Deprecated. Use the toUTCString() method instead
toISOString()	Returns the date as a string, using the ISO standard
toJSON()	Returns the date as a string, formatted as a JSON date
toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()	Converts a Date object to a string, using locale conventions
toString()	Converts a Date object to a string
toTimeString()	Converts the time portion of a Date object to a string
toUTCString()	Converts a Date object to a string, according to universal time
UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()	Returns the primitive value of a Date object

*/

//class exercise


let date=new Date(2023,0,11);


  console.log(dateDay(date)); 
//Translates the Day number into a word string
function dateDay(date) {

    switch (date.getDay()+1) {
        case 1:
            
            return "Sunday";

        case 2:
            
            return "Monday";

        case 3:
            
            return "Tuesday";

        case 4:
            
            return "Wednesday";

        case 5:
            
            return "Thursday";

        case 6:
            
            return "Friday";

        case 7:
            
            return "Saturday";


        default:
            return "Not A day";
            
        
    }

    
}

//option 2


 console.log(dateDay2(date)); 

function dateDay2(date){

    let saveDay=date.getDay();

    let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return dayArray[saveDay];

}

//task 2

//tells me how many days until my birthday gets teh dates by milliseconds and subtract the two dates and converts the milliseconds into days

daysToMyBirthday(date);
function daysToMyBirthday(date) {
let newDate= new Date();
let daysToMyBirthDay= date-newDate;

//milliseconds to seconds
daysToMyBirthDay/=1000;

//seconds to minutes
daysToMyBirthDay/=60;

//minutes to hours
daysToMyBirthDay/=60;

//hours to days
daysToMyBirthDay/=24;

console.log(Math.floor(daysToMyBirthDay)+1 );




}





//Arrow Function

//regular function
function thisFunction(){


}



//variable function

const  thisFunction2 = function() {


};


//arrow function

const thisFunction3 = ()=>{

}
//returns a * b
const thisFunction4 = (a,b)=> a * b;

//inside of a function


const array=["aza","agw","ana","aads","asds","hjg"];


console.log(array.filter((word)=>word[0]=="a"));



console.log(ifNumberIsAPalindrome(112211)); 

function ifNumberIsAPalindrome(num) {
    let newNum=num.toString();
        newNum=newNum.split("");
    let newNumReverse =newNum.reverse();
        newNumReverse= newNumReverse.join("");
        newNum=newNum.reverse();
        newNum=newNum.join("");

      /*  
        option 2

        newNumReverse=num.toString();
        newNumReverse.split("");
        newNumReverse.reverse();
        newNumReverse.join(""); 

        if(num.toString()==newNumReverse){
        
            return true;
        
        }

        else{
        
            return false;
        
        }

        */

    console.log(newNum+" "+newNumReverse);

    if (newNum==newNumReverse) {
        return true;
        
    }

    else {
        return false;
    }
    
}

let arrayOfNums=[12312,12321,3333,12324,552255,23523,1232342];

arrayOfNums.sort((a,b)=>{ 

    if (ifNumberIsAPalindrome(a)){

        return -1;

    } 
    else if (ifNumberIsAPalindrome(b)) {

        return 1;
        
    }

    return 0;

}
);

 
console.log(arrayOfNums);