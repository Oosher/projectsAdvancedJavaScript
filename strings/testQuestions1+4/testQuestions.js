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


//part4


const productContainer = document.querySelector(".productContainer");
const productInfo=document.createElement("div");

let productCounter=1;

document.querySelector("#firstProduct").addEventListener("click",showProduct1);
document.querySelector("#secondProduct").addEventListener("click",showProduct2);
document.querySelector("#changeProduct").addEventListener("click",productChange);

function showProduct1() {

    showProductOnScreen(arrayOfProducts[0]);
   
    productCounter=1;
    
}
function showProduct2() {

    showProductOnScreen(arrayOfProducts[1]);
    
    productCounter=2;0
}


function  showProductOnScreen(product){
    
    productInfo.remove();
    

    productInfo.innerHTML="Name : "+product.name+"<br>"+"Serial number : "+product.serialNumber+"<br>"+"Sell price :"+product.sellPrice+"<br>"+"Buy price : "+product.buyPrice+"<br>"+"Stock : "+product.stock;

    productContainer.appendChild(productInfo)
    
    console.log(productInfo);


}

function productChange(){
const maxProducts =2

productCounter++;

if (productCounter>2) {
    
    productCounter=1;
    
}
    
    showProductOnScreen(arrayOfProducts[productCounter-1]);

    

}