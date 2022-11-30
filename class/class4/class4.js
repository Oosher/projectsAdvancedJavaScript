
//coping an object 
//shallow copy
const newObject = {

    firstName:"tutusdff",
    lastName:"smulof",

    address:{

        street:"disingof",

        city:"jerushalyim",

        country:"isreal"

    }


}




let copiedNewObject = Object.assign({},newObject);
//this can be changed without changing the source
copiedNewObject.firstName="shlomon";

//this cannot be changed without changing the source
copiedNewObject.address.city= "tel aviv";



console.log(newObject);

console.log(copiedNewObject);

//option 2 for shallow copy


const copiedNewObject2 =  {...newObject};




//deep copy 


//Json stringify

//turn the object into string

let copiedNewObject3 = JSON.stringify(newObject);


console.log(copiedNewObject3);



//Jason parse

//turns the stringified object into an object

copiedNewObject3= JSON.parse(copiedNewObject3);

console.log(copiedNewObject3);