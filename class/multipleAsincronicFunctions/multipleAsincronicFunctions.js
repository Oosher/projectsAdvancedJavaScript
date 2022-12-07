
//promiseAll

const search = document.querySelector("#search");

const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click",countryName)

function countryName() {

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




let countryResult;

newPromise

    .then((response=>{

            countryResult = response;

            countryResult = JSON.parse(countryResult);

            console.log(countryResult);

            
          
            

    }))

    .catch ((status)=>{

        document.body.innerHTML=`ERROR ${status} PAGE NOT FOUND`;

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
      