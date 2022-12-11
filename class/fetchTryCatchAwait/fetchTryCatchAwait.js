

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




    //Async functions & wait




    function getCountries (){
        const newPromise = new Promise((resolve,reject)=>{

            const xhttp = new XMLHttpRequest();

            xhttp.open("get","https://restcountries.com/v3.1/all");

            xhttp.onload =function(){
                if (xhttp.status==200) {

                    resolve(JSON.parse(xhttp.response));
                    
                }

                else{
                    
                    reject(xhttp.status);

                }
            };
            xhttp.send();

        });

        return newPromise;

    }

    async function getCountriesAsync(){


        const promiseResult = await getCountries();

        try{

            console.log(promiseResult);

        }

        catch(error){

            console.log(error);

        }
        

    }



    getCountriesAsync();