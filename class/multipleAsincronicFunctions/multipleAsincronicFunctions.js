
//promiseAll

const search = document.querySelector("#search");

const searchButton = document.querySelector("#searchButton");

const container = document.querySelector(".container");

const countryData = document.createElement("div");

const countryImage = document.createElement("img");

const weatherData = document.createElement("div");

const weatherIcon = document.createElement("img");

searchButton.addEventListener("click",countryDataAndCapitalWeather);

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

        console.log(JSON.parse(arrayOfResults[0]));

    })

    .catch((arrayOfStatuses)=>{

        alert(`ERROR ${arrayOfStatuses} COUNTRY DOS NOT EXIST`);

    })

}





function countryDataAndCapitalWeather() {

    const countryData = new Promise((resolve,reject)=>{

        const xhttp2 = new XMLHttpRequest();

            xhttp2.open("GET",`https://restcountries.com/v3.1/name/${search.value}?fullText=true`);

            xhttp2.onload = function (){

                console.log(this);

                if ( xhttp2.status==200) {

                    resolve(JSON.parse(xhttp2.response));

                }
                else{

                    reject(xhttp2.status);

                }

    }

    xhttp2.send();

    })

    countryData.then((result)=>{
        addCountryToHtml(result);
        console.log(result);
        console.log(getCapitalOfACountry(result));
        return new Promise((resolve,reject)=>{

            xhttpWeather = new XMLHttpRequest();

                xhttpWeather.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${getCapitalOfACountry(result)}&appid=114ec643a112e43327c59d9900d3bb20&units=metric`);


                xhttpWeather.onload = function () {

                    if (xhttpWeather.status==200){
                        resolve(JSON.parse(xhttpWeather.response))
                    }
                    else{
                        reject(xhttpWeather.status)
                    }
                    
                }

                xhttpWeather.send();

                })

                
    }).then((response)=>{

            console.log(response);

            addWeatherToHtml(response);


        }).catch((errorStatus)=>{
            
                alert(`ERROR ${errorStatus} COUNTRY DOS NOT EXIST`);

            })
        

        
        

    
}




function getCapitalOfACountry(result) {

    return result[0].capital[0];
    
}




function addCountryToHtml(country) {
    

    

    countryData.innerHTML=`<br>Country : ${country[0].name.common}<br><br> Capital : ${country[0].capital[0]}<br><br>Continent : ${country[0].continents[0]}`

    countryImage.src=country[0].flags.png;

    container.appendChild(countryData);

    container.appendChild(countryImage);


}



function addWeatherToHtml(weatherInTheCapital) {




    weatherData.innerHTML=`Temp: ${weatherInTheCapital.main.temp} &#8451 <br> Feels like : ${weatherInTheCapital.main.feels_like} &#8451 <br>description : ${weatherInTheCapital.weather[0].description} <br><br>`
    

    weatherIcon.src=`http://openweathermap.org/img/wn/${weatherInTheCapital.weather[0].icon}@2x.png`;

    weatherIcon.style.backgroundColor="black"

    container.innerHTML+="<br>";

    container.appendChild(weatherData);

    container.appendChild(weatherIcon);
    
    
    
}