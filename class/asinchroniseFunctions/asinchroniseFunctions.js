
//callback functions



function calculate (a,b,callbackFunction){

    let result = a+b;

    callbackFunction(result);

}


function  display(displayItem) {
    

    console.log(displayItem);

}


let x = calculate(3,7,display);


let y = calculate(6,5,(displayItem)=>{
    console.log(displayItem);
});



//ajax Asynchronous JavaScript And XML


//object XMLHttpRequest

const xhttp = new XMLHttpRequest();

console.log(xhttp);

xhttp.onload=function(){

let result = this.responseXML;

let countries = result.getElementsByTagName("wb:country");

let childNodes = countries[0].childNodes;

for (let j = 0; j < countries.length; j++) {

    for (let i = 1; i < childNodes.length; i+=2) {
        console.log(countries[j].childNodes[i].textContent);
        
    }

}

console.log(result);

console.log(countries);

};

//opens a get request to the http
xhttp.open("GET","http://api.worldbank.org/v2/country");

//sent a request for the api
xhttp.send();








//2 turning it into an object by using JASON . parse ()

const xhttp2 = new XMLHttpRequest();

xhttp2.open("GET","https://restcountries.com/v3.1/all");

xhttp2.onload = function (){

    let result = this.response;

    result = JSON.parse(result);

    console.log(result);

    countriesThatStartsWithAnI(result);

    countryNamesAndFlags(result);

}



xhttp2.send();


//class task 1


function countriesThatStartsWithAnI(countries) {

    countries.map((country)=>{
       
          if (country.name.common.charAt(0)=="T") {

            console.log(country.name.common);

          }

          

          //option 2
          
       /*   if (country.name.common[0])=="G") {

                console.log(country.name.common);

            } 
          */
        
    })


    //option 3

  /*  countries = countries.filter((country)=>{

        
        return country.name.common.charAt(0)=="T"


    })
    
    console.log(countries); */



}



function countryNamesAndFlags(countries) {
    

    const  container = document.createElement("div");

        document.body.appendChild(container);

    countries.map((country)=>{
        

        let singleCountryContainer = document.createElement("div");

        singleCountryContainer.className = country.name.common + "Container"

        let countryName = document.createElement("h1");

        countryName.innerHTML=country.name.common;

        let countryFlag = document.createElement("img");

        countryFlag.src=country.flags.png;

        singleCountryContainer.appendChild(countryName);

        singleCountryContainer.appendChild(countryFlag);

        container.appendChild(singleCountryContainer)


    });
    
}

