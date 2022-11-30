
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


}



xhttp2.send();

