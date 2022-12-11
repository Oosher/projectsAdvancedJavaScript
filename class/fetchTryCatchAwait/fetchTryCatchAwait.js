

//fetch

const promise = fetch("https://restcountries.com/v3.1/all");

promise
    .then((value)=>{
        
        //option 1
        // return value.text();

        return value.json();

    })

    .then((value)=>{

        console.log(value);

    })

    .catch((error)=>{

        console.log(error);

    })





    //try & catch


    /* 

    let z = 5 + y ;

    console.log("hello"); 

    */


    //when using try and catch the code wil not stop at the error but will continue and print the message instead 
    try{

        let x = 5 + y ;

    }
    
    catch(error)
    {

        console.log(error);

    }