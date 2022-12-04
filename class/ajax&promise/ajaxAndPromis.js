


const selectTab = document.querySelector("#country");

const selectCountry = document.querySelector("#selectCountry");




let fetchs = fetch("https://api.openweathermap.org/data/2.5/weather?lat=40&lon=10&appid=114ec643a112e43327c59d9900d3bb20")

console.log(fetchs);









xhttpWeather = new XMLHttpRequest();

xhttpWeather.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=114ec643a112e43327c59d9900d3bb20");




xhttpWeather.onload = function () {

    let weatherObj = this.response;
    weatherObj= JSON.parse(weatherObj)
    console.log(weatherObj);
    
}


xhttpWeather.send();




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





selectCountry.addEventListener("click",()=>{

console.log(selectTab.value);

})












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

