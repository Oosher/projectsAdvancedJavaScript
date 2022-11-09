//q1 :




console.log(howManyNumbers(1,2,3,4,4,5,2,24,2,4,14,14,14,2,4,42,4));

function  howManyNumbers(...n) {

    return n.length;
    
}


//q2 : 




printStudent("yusef",123123123,3,23,13)

function printStudent(name,id,...outerDetails) {

    console.log(`${name}\n${id}`);
        
    for (let i = 0; i < outerDetails.length; i++) {

        console.log(outerDetails[i]);
        
    }

    
}

//q3 :



let array = [1,3,2,34,4,5,4,5,6,7,8,5,4,5,6,4];

console.log(addANumberToAnArray(array,5555));


function addANumberToAnArray(array,n) {


    let newArray = [...array,n];


    return newArray;
    
}





//q4 :




const newApartment = {

city:"TelAviv",

apartmentArea: 100,

level:0,

price:500000,

}




let {city,price, ...otherDetails} =newApartment;

console.log(`city: ${city} \n\nprice: ${price}`);

for (const key in otherDetails) {
    
    console.log(key+" : "+otherDetails[key]);

}