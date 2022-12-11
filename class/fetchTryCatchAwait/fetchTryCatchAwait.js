

//fetch

const promise = fetch("https://restcountries.com/v3.1/all");

let arrayOfAllCountries = [];

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


    

    /* let z = 5 + y ; */

    /* console.log("hello");  */



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


    

    //class task 



    const arrayOfCountry = ["Israel","Canada","france","italy"];

    function getCountryByNameWithFetch(countryName) {

        return fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        
    }

    async function presentCountryNamesWithFetch(){

        for (let i = 0; i < arrayOfCountry.length; i++) {
            let countryToDisplay = await getCountryByNameWithFetch(arrayOfCountry[i]);

        countryToDisplay= await countryToDisplay.json();

        console.log(countryToDisplay[0].name.common);
            
        }


    }


    presentCountryNamesWithFetch();


    //regular way


    function getCountryByName(countryName) {
     const newPromise = new Promise((resolve,reject)=>{

            const xhttp = new XMLHttpRequest();

            xhttp.open("get",`https://restcountries.com/v3.1/name/${countryName}`);

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

    async function presentCountryNames(){

        try{

                for (let i = 0; i < arrayOfCountry.length; i++) {
                    
                    let countryToDisplay = await getCountryByName(arrayOfCountry[i]);

                    console.log(countryToDisplay[0].name.common);
                    
                }

        }

        catch(error){
            console.log(error);
        }

    } 


    presentCountryNames(); 

    
    async function putAllTheCountriesIntoAnArray(...countries){

        let biggestCountry = await getCountryByName(countries[0]) ;
        let biggestArea = biggestCountry[0].area;

        for (let i = 0; i < countries.length; i++) {

            let country = await getCountryByName(countries[i]);

            if (country[0].area > biggestArea) {

                biggestCountry = countries[i];

                biggestArea = country[0].area;

                console.log(country);

            }
            
        }

        console.log(biggestCountry);  

        // the return can only be used on a different async function
        return biggestCountry;
        
    }




putAllTheCountriesIntoAnArray("Israel","Canada","france","italy","Russia"); 





function getAllCountries(){

    const allCountryPromise = new Promise ((resolve,reject)=>{


    const allCountryData = new XMLHttpRequest();

    allCountryData.open("get","https://restcountries.com/v3.1/all")

    allCountryData.onload= function (){
        if (allCountryData.status==200) {

            resolve(JSON.parse(allCountryData.response))
            
        }
        else{

            reject(allCountryData.status)
        
        }
    }


    allCountryData.send();

    })


return allCountryPromise;



}


async function tenBiggestCountries(){

    //brought all of the countries into an array of objects
    let arrayOfAllCountries = await getAllCountries();
    
    //sorts the array by country area 
    arrayOfAllCountries.sort((a,b)=>{return b.area-a.area});

    //slicing the 10 top countries in the array
    arrayOfAllCountries = arrayOfAllCountries.slice(0,10);

    //shows the 10 biggest countries 
    console.log(arrayOfAllCountries);

}



tenBiggestCountries();


const countrySearch =document.querySelector("#countrySearch");

const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click",printCountryDetailsToHtml);

async function printCountryDetailsToHtml() {

    const newCountry = await getCountryByName(countrySearch.value);

    const countryDetailContainer = document.createElement("div");

    const countryFlagImg = document.createElement("img");

    countryDetailContainer.innerHTML =`${newCountry[0].name.common} ${newCountry[0].area} ${JSON.stringify(newCountry[0].languages)} ${newCountry[0].car.side}  ` 

    countryFlagImg.src= newCountry[0].flags.png;

    console.log(newCountry);

    document.body.appendChild(countryDetailContainer);

    document.body.appendChild(countryFlagImg);
    
}
