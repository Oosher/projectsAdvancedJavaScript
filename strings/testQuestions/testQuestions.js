function Product(name,serialNumber,sellPrice,buyPrice,stock) {


    this.name = name;
    this.serialNumber = serialNumber;
    this.sellPrice = sellPrice;
    this.buyPrice = buyPrice;
    this.stock = stock;

}


function crateArrayOfProducts(n){

    let arrayOfProducts = [];

    for (let i = 0; i < n; i++) {
       arrayOfProducts.push(new Product("Product "+(i+1),Math.floor(Math.random()*1000000),Math.floor(Math.random()*1000),Math.floor(Math.random()*1000),Math.floor(Math.random()*100)));
        
    }

    return arrayOfProducts;

}

let arrayOfProducts = crateArrayOfProducts(5);

console.log(arrayOfProducts);


function stockBuyPrice(array) {

    let stockBuy = 0;

    for (let i = 0; i < array.length; i++) {
        stockBuy+=(array[i].buyPrice * array[i].stock);
        
    }

    return stockBuy;
    
}

let buyPrice = stockBuyPrice(arrayOfProducts);

console.log("the Stock buy price is : " + buyPrice);

function stockSellPrice(array) {

    let stockSell = 0;

    for (let i = 0; i < array.length; i++) {
        stockSell+=(array[i].sellPrice * array[i].stock);
        
    }

    return stockSell;
    
}

let sellPrice = stockSellPrice(arrayOfProducts);

console.log("the Stock sell price is : " + sellPrice);

function profit(sellPrice , buyPrice) {

    return sellPrice-buyPrice;
    
}

let profits = profit(sellPrice,buyPrice);

console.log(profits);