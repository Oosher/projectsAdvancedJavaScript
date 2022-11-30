
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

console.log(result);

};


xhttp.open("GET","http://api.worldbank.org/v2/country");

xhttp.send();