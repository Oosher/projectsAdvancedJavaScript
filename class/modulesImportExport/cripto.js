

export class allCrypto{

    static crypto(){


        const allCurrency = new Promise((resolve,reject)=>{

            const currency = new XMLHttpRequest();

            currency.open("get", "https://api2.binance.com/api/v3/ticker/24hr");


            currency.onload = function(){

                if (currency.status==200) {
                    
                    resolve(JSON.parse(currency.response));
                    
                }
                else{

                    reject(currency.status);

                }

            }

            currency.send();
        })


        return allCurrency;

    }



    static async biggestCoinRise(coinArray , biggerOrSmaller ){
        

            let biggestCoinOrLowest= coinArray[0];

            coinArray.map((coin)=>{

                if (biggerOrSmaller==">") {

                    if (Number(coin.priceChangePercent) > Number(biggestCoinOrLowest.priceChangePercent)) {
                            
                            biggestCoinOrLowest = coin;

                        }
                    
                }

                if (biggerOrSmaller=="<") {

                    if (Number(coin.priceChangePercent) < Number(biggestCoinOrLowest.priceChangePercent)) {
                            
                            biggestCoinOrLowest = coin;

                    }
                }
            })  
            
            return biggestCoinOrLowest;
            
        
        
    }



/*     static lowestDroppedCoin (){

        let coinArray = this.crypto();

        coinArray
        .then((value)=>{

            let lowestCoin= value[0];

            value.map((coin)=>{

                if (Number(coin.priceChangePercent)<Number(lowestCoin.priceChangePercent)) {
                    
                    lowestCoin = coin;

                }
            })
            
            console.log(lowestCoin);
            
            return lowestCoin;
            
        })

        .catch((status)=>{

            console.log(status);

        }

        )

        
        
    } */


    static async biggestChange(){

        let coinArray = this.crypto();

        coinArray.then((value)=>{

            let biggestCoin = this.biggestCoinRise(value,">");

            let lowestCoin = this.biggestCoinRise(value,"<");

            biggestCoin.then((value)=>{
                biggestCoin = value
            })
                lowestCoin.then((value)=>{
                lowestCoin = value;

                console.log( biggestCoin,lowestCoin);
            })
            
            


            

        })
        
            


    }


    /* option 2

    static async biggestChange (){

        const coinArray = await this.crypto();

        let biggestCoin = coinArray[0];


        coinArray.map((coin)=>{

            if (coin.priceChange>biggestCoin.priceChange) {
                
                biggestCoin = coin;

            }
        })

        console.log(coinArray);
        console.log(biggestCoin);

    } */
}