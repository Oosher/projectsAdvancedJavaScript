


const selectTab = document.querySelector("#country");



function  addOptionToSelectTag(arrayOfOptions) {


    arrayOfOptions.map((countryName)=>{

        let newCountry = document.createElement("option")

        newCountry.value=`${countryName}`;

        newCountry.innerHTML=countryName;

        selectTab.appendChild(newCountry);
        
    })

    
}




let arrayOfCountries = ["isr","pol","ger","bruh","mum","us"];




addOptionToSelectTag(arrayOfCountries);


