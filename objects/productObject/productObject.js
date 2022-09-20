
function Product(productName ,serialNumber, buyPrice,sellPrice,stock){
        this.productName = productName;
        this.serialNumber = serialNumber;
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
        this.stock = stock;
        this.profitPerUnit = this.sellPrice-this.buyPrice;
        this.profitPercentage = this.sellPrice/(this.buyPrice/100);


        this.addToStock =(numberOfProducts)=>{

            this.stock+= numberOfProducts;

        }
        this.removeFromStock =(numberOfProducts)=>{

            this.stock-= numberOfProducts;
        

        }
}

const productsArray=[{product : new Product("mahseve","213546",5000,7000,6)},{product : new Product("tablet","213546",1000,1500,7)},{product : new Product("iphone","213546",3000,4000,23)},{product : new Product("shampoo","213546",6,17,44)},{product : new Product("conditioner","213546",9,15,32)},{product : new Product("ps4","213546",1000,1800,11)},{product : new Product("ps5","213546",1500,4000,3)},{product : new Product("Samsung","213546",3000,4000,10)},{product : new Product("xiaomi","213546",2000,3000,6)},{product : new Product("vaflim","213546",5,9,22)},{product : new Product("God Of War","213546",100,300,32)}]

function costOfStock(productsArray){
    let stockWorth=0;
    let stockSell=0;
    let stockProfit=0;


    for (let i = 0; i < productsArray.length; i++) {
       stockSell+= productsArray[i].product.stock*productsArray[i].product.sellPrice;
       stockWorth = stockSell-(productsArray[i].product.stock*productsArray[i].product.profitPerUnit);
       stockProfit+=productsArray[i].product.stock*productsArray[i].product.profitPerUnit;
        
    }

    
    return "Stock worth = "+stockWorth+" Stock sell worth = "+stockSell+" Profit on all stock = "+stockProfit;


}

console.log(productsArray);
console.log(costOfStock(productsArray));