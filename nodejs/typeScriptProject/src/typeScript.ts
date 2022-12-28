

//crypto website


//properties :symbol , last price ,volume ,price change percent


//get data


const cryptoTable = document.querySelector("#newCryptoCoin")!;

const searchByCoinName = document.querySelector("#searchBtn");

const coinSymbol = document.querySelector("#currency-name") as HTMLInputElement;

class CryptoCoin{

    symbol: string;

    lastPrice: number;

    volume:number;

    priceChangePercent: number;


    constructor(symbol:string,lastPrice: number,volume:number,priceChangePercent:number){

        this.symbol=symbol;

        this.lastPrice=lastPrice;

        this.volume = volume;

        this.priceChangePercent = priceChangePercent;

    }



} 
//option 1
function getData(){


    return new Promise ((resolve,reject)=>{


        const cryptoCoins = new XMLHttpRequest();

        cryptoCoins.open("GET","https://api2.binance.com/api/v3/ticker/24hr");

        cryptoCoins.onload = function(){
            if (cryptoCoins.status==200) {

                resolve(JSON.parse(cryptoCoins.response));
                
            }

            else{

                reject(cryptoCoins.status);

            }
        } 

        cryptoCoins.send();

    });



/*     cryptoPromise.then((response:any)=>{

    console.log(response);

    }).catch((status:any)=>{


    }) */


}

let coinsArray: CryptoCoin []= [];

function createCryptoArray(){

    getData().then((response:any)=>{

        console.log(response);

        coinsArray = response.map((coin:any)=>{
            return new CryptoCoin(coin.symbol,+coin.lastPrice,+coin.volume,+coin.priceChangePercent)
        })

        displayData(coinsArray);

        }).catch((status:any)=>{

            console.log(status);
            

        });
    
} 

createCryptoArray();


//option 2 fetch

function getData2(){

};


function displayData(array:CryptoCoin[]){

    array.map((coin:any)=>{

        let newCryptoTable = document.createElement("tr");
        
        newCryptoTable.innerHTML=`<th>${coin.symbol}</th>
                                <th>${coin.lastPrice}</th>
                                <th>${coin.volume}</th>
                                <th>${coin.priceChangePercent}</th>`;
        newCryptoTable.className="newCryptoTable";

        cryptoTable?.appendChild(newCryptoTable);

    })
        
}

//search by coin name name 


searchByCoinName?.addEventListener("click",()=>{
    cryptoTable.innerHTML="";
    
    displayData(coinsArray.filter((coin)=>{
        return coin.symbol == coinSymbol.value;
    }));

    
})

const newCoin = new CryptoCoin("abah",123,12,3.6);

console.log(newCoin);


