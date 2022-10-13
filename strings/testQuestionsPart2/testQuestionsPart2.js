

const menu= {
    pizza:"pizza : 25",
    hamburger:"hamburger : 55",
    banana:"Banana : 5",
    friedEggs:"Fried eggs : 15",
    belgianWaffle:"Belgian Waffle : 20"

}
const menu2= {
    pizza:"pizza : 15",
    hamburger:"hamburger : 30",
    banana:"Banana : 2",
    friedEggs:"Fried eggs : 7",
    belgianWaffle:"Belgian Waffle : 10"

}
const menu3= {
    pizza:"pizza : 33",
    hamburger:"hamburger : 56",
    banana:"Banana : 7",
    friedEggs:"Fried eggs : 45",
    belgianWaffle:"Belgian Waffle : 35"

}
const menu4= {
    pizza:"pizza : 35",
    hamburger:"hamburger : 65",
    banana:"Banana : 7",
    friedEggs:"Fried eggs : 53",
    belgianWaffle:"Belgian Waffle : 24"

}
const menu5= {
    pizza:"pizza : 20",
    hamburger:"hamburger : 50",
    banana:"Banana : 3",
    friedEggs:"Fried eggs : 10",
    belgianWaffle:"Belgian Waffle : 15"

}

printMenu(menu);


function printMenu(obj){

    for(let i in obj){

        console.log(obj[i]);


    }

}

printBItems(menu);

function printBItems(obj){

    for(let i in obj){
        
        if (obj[i].indexOf("B")==0||obj[i].indexOf("b")==0) {

            console.log(obj[i]);

        }
     


    }

}



console.log(mostExpensive(menu));
function mostExpensive(obj){


    let mostExpensiveItem;
    let heistPrice = 0

      for(let i in obj){
        
        if ( obj[i].match(/(\d+)/)[0]>heistPrice) {

            heistPrice=obj[i].match(/(\d+)/)[0];
            mostExpensiveItem=obj[i];

        }
     


    }

    return mostExpensiveItem;
   
}

console.log(averagePrice(menu));

function averagePrice(obj){


    let average = 0;
    let counter = 0

      for(let i in obj){
        
        

            average+=+obj[i].match(/(\d+)/)[0];
            counter++;

            
     


    }

    return average/counter;
   
}


const menuArray=[menu,menu2,menu3,menu4,menu5];

console.log(cheapestMenu(menuArray));

function cheapestMenu(objArray){
    let bestMenu =objArray[0] ;
for (let i = 0; i < objArray.length; i++) {
        
        if (averagePrice(objArray[i])<averagePrice(bestMenu)) {

            bestMenu=objArray[i];

        }


    }
    
    return bestMenu;

}