


const {Order,createOrders } = require("./initialCode")



async function getOrdersByCustomerName(customerName){

    try{
        const orders = await Order.find({customerName:customerName});

        return orders;

    }catch(err){console.log(err);}


}


async function howManyOrdersForCustomer(customerName){

    try{
        const orders = await Order.find({customerName:customerName}).countDocuments();

        return orders;

    }catch(err){console.log(err);}


}




async function getAllOrdersByItem(itemName){
    
    try{
        const orders = await Order.find({item:itemName});

        return orders;

    }catch(err){console.log(err);}


}






async function sortOrdersByAmount(){


        try{
        const orders = await Order.find().sort({quantity:1});

        return orders;

    }catch(err){console.log(err);}

    
    
}





async function  top5Orders (){

    try{
        const orders = await Order.find().sort({quantity:-1}).limit(5);

        return orders;

    }catch(err){console.log(err);}

}


async function  ordersCostBetween4To50 (){

    try{
        const orders = await Order.find({quantity:{$gte:4}  ,price:{$lte:50}})

        return orders;

    }catch(err){console.log(err);}

}




async function  getOrdersFromListMorExpensiveThan (itemList , price){

    try{
        const orders = await Order.find({price:{$gt:price},item:{$in: itemList}})

        return orders;

    }catch(err){console.log(err);}

}





async function  getItemsTotal (){

    try{
        const orders = await Order.aggregate([ {
    $group: {
        _id: "$item",
        total: { $sum: "$quantity" },
        },
    },
    {
        $project: {
            item: "$_id",
            quantity:"$total",
            _id: 0,
            
        
        },
    },])

        return orders;

    }catch(err){console.log(err);}

}




async function getCustomersAndOrders(){
  
        try{

            const orders = await Order.find({},{customerName:1,item:1})
            return orders;
        }

        catch(err){console.log(err);}


}


//OPTION 2


async function getCustomersAndOrders2(){
  
        try{

            const orders = await Order.find().select({_id:0,customerName:1,item:1})
            return orders;
        }

        catch(err){console.log(err);}


}


async function getTotalRevenue(){
  
        try{

            const orders = await Order.aggregate([{ $group: { _id: null, total: { $sum: { $multiply: ["$price", "$quantity"] } } } },
                { $project: { _id: 0, totalOrderWorth: "$total" } }])
            return orders;
        }

        catch(err){console.log(err);}


}


async function getTotalRevenuePerItem(){
  
        try{

            const orders = await Order.aggregate([{ $group: { _id: "$item", total: { $sum: { $multiply: ["$price", "$quantity"] } } } },
                { $project: { _id:0, item:"$_id", totalOrderWorth: "$total"  } },{$match:{totalOrderWorth:{$gt:100}}}])
            return orders;
        }

        catch(err){console.log(err);}


}




async function getTopCustomers(){
  
        try{

            const orders = await Order.aggregate([{ $group: { _id: "$customerName", total: { $sum: "$quantity" } } },
                { $project: { _id:0, customerName:"$_id", totalOrders: "$total"  } },{$sort:{totalOrders:-1}},{$limit:1}])
             
            return orders;
        }

        catch(err){console.log(err);}


}





async function getAverageOrderPrice(){
  
        try{

            const orders = await Order.aggregate([{ $group: { _id: null, averagePrice: { $avg: "$price"  } } },
                { $project: { _id: 0} }])
            return orders;
        }

        catch(err){console.log(err);}


}


async function main (){


 // console.log(  await getOrdersByCustomerName("John Doe"));

  //console.log( await getAllOrdersByItem("Shoes"));


    //console.log( await howManyOrdersForCustomer("John Doe"));

    //console.log(await sortOrdersByAmount());

    //console.log(await top5Orders());



    //console.log(await ordersCostBetween4To50());
    //console.log(await getOrdersFromListMorExpensiveThan(["Shoes","Bag"],30));


    //console.log(await getItemsTotal());


    //console.log(await getCustomersAndOrders() );



    //console.log(await getTotalRevenue().then((data)=>data[0].totalOrderWorth));

    // console.log(await getTotalRevenuePerItem());
    console.log(await getTopCustomers());


    //console.log( await getAverageOrderPrice());



    //console.log( await getCustomersAndOrders2());


}





main();