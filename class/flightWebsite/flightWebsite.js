
const searchAirportsInTheCity = document.querySelector("#searchAirportsInTheCity");

const searchAirportsInTheCityButton = document.querySelector("#searchAirportsInTheCityButton");

const flightType = document.querySelector("#flightType");

const departureDate = document.querySelector("#departureDate");

const returnDate =document.querySelector("#returnDate");

const departureAirport = document.querySelector("#departureAirport");

const arrivalAirport = document.querySelector("#arrivalAirport");

const submitFlightDetails = document.querySelector("#submitFlightDetails");

const flightsContainer = document.querySelector(".flightsContainer");


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

    flightsContainer.innerHTML="";

    for (let i = 0; i < airportsNearBy.length; i++) {

        let airportContainer = document.createElement("div");

        airportContainer.innerHTML=airportsNearBy[i].Airport+"<br><br>"+airportsNearBy[i].Code+"<br><br>"+airportsNearBy[i].Title+"<br><br><br><br>"
        
        console.log(airportsNearBy.Nearby_Airports);

        flightsContainer.appendChild(airportContainer);
        
    }

        
    console.log(airportsNearBy[`Nearby Airports`]);
    
}


submitFlightDetails.addEventListener("click",getFlights);

async function getFlights(){

    flightsContainer.innerHTML="";

    if (flightType.value=="oneDirection") {

        let oneWayFlights = await flightApiRequest(`onewaytrip/639793cba42e97f348f3771e/${departureAirport.value}/${arrivalAirport.value}/${departureDate.value}/1/0/0/Economy/USD`)

        console.log(oneWayFlights);

        oneWayFlights.fares.map((flight)=>{
            let flightContainer = document.createElement("div");

            flightContainer.style.cssText=
            `margin: 10px auto;
            text-align: center;
            width: fit-content;
            padding: 3px;
            border: 2px lightseagreen groove;
            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;
            
            flightContainer.innerHTML=`website : ${flight.providerCode}<br><br> Price : ${flight.price.totalAmount}$ <br><br> Link for perches : <a href="${flight.handoffUrl}">Go to sight</a> <br><br> Trip id : ${flight.tripId}`;
            console.log(flightContainer.innerHTML);
            flightsContainer.appendChild(flightContainer);

        })
    }

    if (flightType.value=="towDirections") {
        let roundTripFlights = await flightApiRequest(`roundtrip/639793cba42e97f348f3771e/${departureAirport.value}/${arrivalAirport.value}/${departureDate.value}/${returnDate.value}/1/0/0/Economy/USD`)

        console.log(roundTripFlights);

        roundTripFlights.fares.map((flight)=>{
            let flightContainer = document.createElement("div");
            flightContainer.style.cssText=
            `margin: 10px auto;
            text-align: center;
            width: fit-content;
            padding: 3px;
            border: 2px lightseagreen groove;
            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;
            flightContainer.innerHTML=`website : ${flight.providerCode}<br><br> Price : ${flight.price.totalAmount}$ <br><br> Link for perches : <a href="${flight.handoffUrl}">Go to sight</a> <br><br> Trip id : ${flight.tripId}`;
            console.log(flightContainer.innerHTML);
            flightsContainer.appendChild(flightContainer);

        })
    }
}




