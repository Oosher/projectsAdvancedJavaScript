

//fetch

const promise = fetch("https://restcountries.com/v3.1/all") ;

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