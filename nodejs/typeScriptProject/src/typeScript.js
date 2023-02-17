//crypto website
//properties :symbol , last price ,volume ,price change percent
//get data
var cryptoTable = document.querySelector("#newCryptoCoin");
var searchByCoinName = document.querySelector("#searchBtn");
var coinSymbol = document.querySelector("#currency-name");
var minPrice = document.querySelector("#min-price");
var maxPrice = document.querySelector("#max-price");
var priceRageSearch = document.querySelector("#price-search-button");
var minVolume = document.querySelector("#min-volume");
var maxVolume = document.querySelector("#max-volume");
var searchByVolume = document.querySelector("#volume-search-button");
var top10ByVolume = document.querySelector("#top-10-button");
var sortBy = document.querySelector("#sort-by");
var sortButton = document.querySelector("#sort-button");
var ascendingSort = document.querySelector("#sort-ascending");
var CryptoCoin = /** @class */ (function () {
    function CryptoCoin(symbol, lastPrice, volume, priceChangePercent) {
        this.symbol = symbol;
        this.lastPrice = lastPrice;
        this.volume = volume;
        this.priceChangePercent = priceChangePercent;
    }
    return CryptoCoin;
}());
//option 1
function getData() {
    return new Promise(function (resolve, reject) {
        var cryptoCoins = new XMLHttpRequest();
        cryptoCoins.open("GET", "https://api2.binance.com/api/v3/ticker/24hr");
        cryptoCoins.onload = function () {
            if (cryptoCoins.status == 200) {
                resolve(JSON.parse(cryptoCoins.response));
            }
            else {
                reject(cryptoCoins.status);
            }
        };
        cryptoCoins.send();
    });
    /*     cryptoPromise.then((response:any)=>{
    
        console.log(response);
    
        }).catch((status:any)=>{
    
    
        }) */
}
var coinsArray = [];
function createCryptoArray() {
    getData().then(function (response) {
        console.log(response);
        coinsArray = response.map(function (coin) {
            return new CryptoCoin(coin.symbol, +coin.lastPrice, +coin.volume, +coin.priceChangePercent);
        });
        displayData(coinsArray);
    })["catch"](function (status) {
        console.log(status);
    });
}
createCryptoArray();
//option 2 fetch
function getData2() {
}
;
function displayData(array) {
    cryptoTable.innerHTML = "";
    array.map(function (coin) {
        var newCryptoTable = document.createElement("tr");
        newCryptoTable.innerHTML = "<th>".concat(coin.symbol, "</th>\n                                <th>").concat(coin.lastPrice, "</th>\n                                <th>").concat(coin.volume, "</th>\n                                <th>").concat(coin.priceChangePercent, "</th>");
        newCryptoTable.className = "newCryptoTable";
        cryptoTable === null || cryptoTable === void 0 ? void 0 : cryptoTable.appendChild(newCryptoTable);
    });
}
//search by coin name name 
searchByCoinName === null || searchByCoinName === void 0 ? void 0 : searchByCoinName.addEventListener("click", function () {
    displayData(coinsArray.filter(function (coin) {
        return coin.symbol.includes(coinSymbol.value);
    }));
});
var newCoin = new CryptoCoin("abah", 123, 12, 3.6);
console.log(newCoin);
//search by price 
priceRageSearch.addEventListener("click", function () {
    displayData(coinsArray.filter(function (coin) {
        if (minPrice.value != "" && maxPrice.value == "") {
            return coin.lastPrice > +minPrice.value;
        }
        if (minPrice.value == "" && maxPrice.value != "") {
            return coin.lastPrice < +maxPrice.value;
        }
        return coin.lastPrice > +minPrice.value && coin.lastPrice < +maxPrice.value;
    }));
});
//search by volume 
searchByVolume.addEventListener("click", function () {
    displayData(coinsArray.filter(function (coin) {
        if (minVolume.value != "" && maxVolume.value == "") {
            return coin.volume > +minVolume.value;
        }
        if (minVolume.value == "" && maxVolume.value != "") {
            return coin.volume < +maxVolume.value;
        }
        return coin.volume > +minVolume.value && coin.volume < +maxVolume.value;
    }));
});
//top 10 exchange rates by volume 
top10ByVolume.addEventListener("click", function () {
    var newCoinArray;
    newCoinArray = coinsArray;
    console.log(newCoinArray);
    newCoinArray.sort(function (a, b) { return b.volume - a.volume; });
    displayData(newCoinArray.slice(0, 10));
});
// sort by
sortButton.addEventListener("click", function () {
    var sortByArray;
    sortByArray = coinsArray;
    displayData(sortByArray.sort(function (a, b) {
        if (ascendingSort.checked) {
            var temp = a;
            a = b;
            b = temp;
        }
        switch (sortBy.value) {
            case "volume":
                return b.volume - a.volume;
            case "lastPrice":
                return b.lastPrice - a.lastPrice;
            case "priceChangePercent":
                return b.priceChangePercent - a.priceChangePercent;
            default:
                var x = a.symbol.toLowerCase();
                var y = b.symbol.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
                ;
        }
    }));
});
