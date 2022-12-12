
const searchAirportsInTheCity = document.querySelector("#searchAirportsInTheCity");

const searchAirportsInTheCityButton = document.querySelector("#searchAirportsInTheCityButton");

const flightType = document.querySelector("#flightType");

const departureDate = document.querySelector("#departureDate");

const returnDate =document.querySelector("#returnDate");

const submitFlightDetails = document.querySelector("#submitFlightDetails");




function flightApiRequest(url) {


    const flightApiDetails = new Promise ((resolve,reject)=>{

        const flightXhttpRequest = new XMLHttpRequest();

        flightXhttpRequest.open("get",`https://api.flightapi.io/${url}`);

        flightXhttpRequest.onload= function (){

            if (flightXhttpRequest.status==200) {

                resolve(JSON.parse(flightXhttpRequest.response));
                
            }
            else{

                reject(flightXhttpRequest.status);

            }
        }

        flightXhttpRequest.send();
    })


        return  flightApiDetails;
    
}


searchAirportsInTheCityButton.addEventListener("click",getCityAirportsNearBy);


async function getCityAirportsNearBy() {

    let airportsNearBy = await flightApiRequest(`nearby/639793cba42e97f348f3771e?country=${searchAirportsInTheCity.value}&token=dHA9MCNsb2M9MzUxNTQyMTkjbG5nPTMzI3BsPTIjhfjdsfk5MzQxI2xicz0xNDoxNjcwNTczMQ==`);

    airportsNearBy = airportsNearBy[`Nearby Airports`];

    for (let i = 0; i < airportsNearBy.length; i++) {

        let airportContainer = document.createElement("div");

        airportContainer.innerHTML=airportsNearBy[i].Airport+"<br><br>"+airportsNearBy[i].Code+"<br><br>"+airportsNearBy[i].Title+"<br><br><br><br>"
        
        console.log(airportsNearBy.Nearby_Airports);

        document.body.appendChild(airportContainer);
        
    }

        
    console.log(airportsNearBy[`Nearby Airports`]);
    
}
