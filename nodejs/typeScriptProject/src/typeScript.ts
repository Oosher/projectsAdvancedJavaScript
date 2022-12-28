

//crypto website


//properties :symbol , last price ,volume ,price change percent


//get data

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

function getData(){


    const cryptoPromise = new Promise ((resolve,reject)=>{


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


    cryptoPromise.then((response:any)=>{

    console.log(response);

    }).catch((status:any)=>{


    })


}

getData();



const newCoin = new CryptoCoin("abah",123,12,3.6);

console.log(newCoin);


