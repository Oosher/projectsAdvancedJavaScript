function MyDateObject(day ,month ,year){
this.day = day;
this.month = month;
this.year = year;

}


function Test(testName ,testDate){
    this.testName=testName;
    this.TestDate = testDate;
     
}

const arrayOfTests = [
  { testName: "Math1", TestDate: new MyDateObject(2022, 10, 3) },
  { testName: "Math2", TestDate: new MyDateObject(2022, 11, 21) },
  { testName: "Math3", TestDate: new MyDateObject(2022, 01, 11) },
  { testName: "Electricity1", TestDate: new MyDateObject(2022, 3, 3) },
  { testName: "Electricity2", TestDate: new MyDateObject(2022, 10, 11) },
  { testName: "Electricity3", TestDate: new MyDateObject(2022, 10, 20) },
  { testName: "Electricity4", TestDate: new MyDateObject(2022, 5, 3) },
  { testName: "History1", TestDate: new MyDateObject(2022, 8, 23) },
  { testName: "History2", TestDate: new MyDateObject(2022, 10, 8) },
  { testName: "History3", TestDate: new MyDateObject(2022, 7, 12) },
  { testName: "Art1", TestDate: new MyDateObject(2022, 10, 29) },
  { testName: "Art2", TestDate: new MyDateObject(2022, 4, 5) },
  { testName: "Art3", TestDate: new MyDateObject(2022, 10, 14) },
];


function testAmount(){

        let counter = 0;
        
        for (let i = 0; i < arrayOfTests.length; i++) {
            
            if(arrayOfTests[i].TestDate.month==10){

                counter++;

            }
            
        }
        return counter;
    } 
 console.log(testAmount());





 
 function isItTheSame(t,d) {

    //option 1 

    /*if (t.TestDate.year== d.year && t.TestDate.month== d.month && t.TestDate.day== d.day) {
        return true;

    }
    else{
        return false;
    } */

    //option 2
    //JSON.stringify() :

    console.log(JSON.stringify(t.TestDate),JSON.stringify(d));

         return JSON.stringify(t.TestDate)==JSON.stringify(d);

}
 
function isEarlier(d1,d2){
    /* option 1 
    if (d1.year>d2.year) {
        return d2;
        
    }else if(d1.year==d2.year){
        if(d1.month > d2.month){
                return d2;
        }else if(d1.month==d2.month){
            if(d1.day > d2.day){
                return d2;
            }
            else if (d1.day == d2.day) {
                return "Equal";
            }
            else{
                return d1;
            }
        }
    } */



    //option 2


 /*    if(d1.year>= d2.year && d1.month>=d2.month &&d1.day>d2.day){
        return d2;
    }
    else {
        return d1; 
    } */



    //option 3
    let tempDate1 = new Date(d1.year,d1.month,d1.day);
    let tempDate2 = new Date(d2.year,d2.month,d2.day);
    
    if (tempDate1>tempDate2) {
        return d2;
    }
    else{
        return d1;
    }
}

function isBiggerDate(d1,d2){
 

    //option 3
    let tempDate1 = new Date(d1.year,d1.month,d1.day);
    let tempDate2 = new Date(d2.year,d2.month,d2.day);
    
    if (tempDate1>tempDate2) {
        return true;
    }
    else{
        return false;
    }
}


function latestTest(arrayOfTests){

    let tempLatestTest= arrayOfTests[0];
    //option 1
    /* for (let i = 0; i < arrayOfTests.length; i++) {

        if (isBiggerDate(arrayOfTests[i].TestDate,tempLatestTest.TestDate)) {

            tempLatestTest=arrayOfTests[i];
            
        } */
       /*  console.log(tempLatestTest);
        console.log(isBiggerDate(arrayOfTests[i].TestDate,tempLatestTest.TestDate));  */
    /* } */
    
    //option 2

    for (const key in arrayOfTests) {
        let temp = isBiggerDate(tempLatestTest.TestDate,arrayOfTests[key].TestDate)
        if (temp==true) {

            tempLatestTest=arrayOfTests[key];
            
            
        }
        console.log(arrayOfTests[key].TestDate);
    }

    return tempLatestTest;
    
}


 let testDate = new MyDateObject(2022, 10, 11);

 console.log(isItTheSame(arrayOfTests[4],testDate));

 console.log(isEarlier(arrayOfTests[4],testDate));

 console.log(latestTest(arrayOfTests));