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


let arrayOFProfitableProducts = arrayOfProducts.filter(over20PercentProfit);

function over20PercentProfit(product){

   return (product.sellPrice-product.buyPrice)>(product.buyPrice*0.2);
}

console.log(arrayOFProfitableProducts);

function priceIncrease(array,n) {
let newArray=array;

    for (let i = 0; i < array.length; i++) {

        console.log(newArray[i].sellPrice);
        newArray[i].sellPrice= newArray[i].sellPrice + n;

    }

   
}





priceIncrease(arrayOfProducts,100);
console.log(arrayOfProducts);



arrayOfProducts[2].name = "Aviron";


//returns ony words thats starts with an A
//name only starts with an capital letter so the outer case is not necessary
function onlyStartsWithA(product) {

    return product.name.indexOf("A")==0;
    
}


let aProduct = arrayOfProducts.filter(onlyStartsWithA);

console.log(aProduct);

//return only if the buy price is bigger than 20
function CostMOreThan20(product) {

    return product.buyPrice>20;
    
}

arrayOfProducts[2].buyPrice = 11;

let onlyCostMOreThan20 = arrayOfProducts.filter(CostMOreThan20);

console.log(onlyCostMOreThan20);