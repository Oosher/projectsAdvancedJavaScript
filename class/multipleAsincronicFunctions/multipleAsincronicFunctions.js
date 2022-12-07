
//promiseAll

const search = document.querySelector("#search");

const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click",moreThanOnePromise);

function countryName() {

   

let countryResult;

newPromise.then((response)=>{

            countryResult = response;

            countryResult = JSON.parse(countryResult);

            console.log(countryResult);

            

            

    })

    .catch ((status)=>{

        alert(`ERROR ${status} COUNTRY DOS NOT EXIST`);

    })

}




















    function countrySearch(countryObjectArray) {
        let notfound=true;
        countryObjectArray.map((country)=>{    
            
            if(country.name.common==search.value){

                console.log(country.name.common);

                notfound=false;

            }

        })

        
        
        

        
    }


    function  getWeather() {

    
    
            weatherPromise
                .then((response=>{
                                let selectedCounter;

                                let weatherObj = response;

                                weatherObj= JSON.parse(weatherObj)

                                console.log(weatherObj);

                }))

                .catch((status)=>{

                        alert(`ERROR ${status} COUNTRY DOS NOT EXIST`);

                })

}






function moreThanOnePromise() {

    const newPromise = new Promise((resolve,reject)=>{

        const xhttp2 = new XMLHttpRequest();

            xhttp2.open("GET",`https://restcountries.com/v3.1/name/${search.value}?fullText=true`);

            xhttp2.onload = function (){

                console.log(this);

                if (xhttp2.status==200) {

                    resolve(xhttp2.response);

                }
                else{

                    reject(xhttp2.status);

                }

    }



    xhttp2.send();



    })

    const weatherPromise = new Promise((resolve,reject)=>{

            xhttpWeather = new XMLHttpRequest();

                xhttpWeather.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=114ec643a112e43327c59d9900d3bb20&units=metric`);


                xhttpWeather.onload = function () {

                    if (xhttpWeather.status==200){
                        resolve(xhttpWeather.response)
                    }
                    else{
                        reject(xhttpWeather.status)
                    }
                    
                }


                xhttpWeather.send();


                })
                


    Promise.all([newPromise,weatherPromise]).then((arrayOfResults)=>{

        console.log(JSON.parse(arrayOfResults[0],arrayOfResults[1]));

    })


    .catch((arrayOfStatuses)=>{

        console.log(arrayOfStatuses);

    })




}