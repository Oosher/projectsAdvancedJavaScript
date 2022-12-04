


const selectTab = document.querySelector("#country");

const selectCountry = document.querySelector("#selectCountry");

const container = document.createElement("section");

const weatherStatusImage = document.createElement("img");

const allContainer =document.querySelector(".allContainer")


allContainer.appendChild(container);

allContainer.appendChild(weatherStatusImage);

container.className="weatherContainer";


selectCountry.addEventListener("click",getWeather);

/* let fetchs = fetch("https://api.openweathermap.org/data/2.5/weather?lat=40&lon=10&appid=114ec643a112e43327c59d9900d3bb20")

console.log(fetchs); */








function  getWeather() {

    const weatherPromise = new Promise((resolve,reject)=>{
        xhttpWeather = new XMLHttpRequest();

            xhttpWeather.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${selectTab.value}&appid=114ec643a112e43327c59d9900d3bb20&units=metric`);


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
    
            weatherPromise
                .then((response=>{
                                let weatherObj = response;
                                weatherObj= JSON.parse(weatherObj)
                                console.log(weatherObj);
                                container.innerText="Degrees in celsius"+(weatherObj.main.temp)+"\n\nFeels like "+(weatherObj.main.feels_like);
                                weatherStatusImage.src=`http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`
                                container.style.display="block";



                }))
                .catch((status)=>{

                                document.body.innerHTML=`ERROR ${status} PAGE NOT FOUND`;

                })

}







function  addOptionToSelectTag(arrayOfOptions) {


    arrayOfOptions.map((countryName)=>{

        let newCountry = document.createElement("option")

        newCountry.value=`${countryName}`;

        newCountry.innerHTML=countryName;

        selectTab.appendChild(newCountry);
    

    })

    
}




function countryNamesIntoAnArray(arrayOfObjectsCountries) {

    let arrayOfCountries = [];

    arrayOfObjectsCountries.map((country)=>{

        arrayOfCountries.push(country.name.common)

    });

    return arrayOfCountries;
    
}

















//Promise


const newPromise = new Promise((resolve,reject)=>{

    const xhttp2 = new XMLHttpRequest();

        xhttp2.open("GET","https://restcountries.com/v3.1/all");

        xhttp2.onload = function (){

            console.log(this);

            if (xhttp2.status==200) {

                resolve(xhttp2.response);

            }
            else{

                reject(xhttp2.status);

            }

            /* 
            let result = this.response;

            result = JSON.parse(result);

            console.log(result);

            addOptionToSelectTag(countryNamesIntoAnArray(result)) 

            */


    }



xhttp2.send();



})



/* option 1 

newPromise.then(

    (response)=>{

            let result = response;

            result = JSON.parse(result);

            console.log(result);

            addOptionToSelectTag(countryNamesIntoAnArray(result)) 

    },

    (status)=>{

        document.body.innerHTML=`ERROR ${status} PAGE NOT FOUND`;

    }

) */




//option 2



newPromise

.then((response=>{

            let result = response;

            result = JSON.parse(result);

            console.log(result);

            addOptionToSelectTag(countryNamesIntoAnArray(result)) 

    }))

    .catch ((status)=>{

        document.body.innerHTML=`ERROR ${status} PAGE NOT FOUND`;

    })

