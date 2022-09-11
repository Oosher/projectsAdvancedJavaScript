function Sing(city,pic,price){
this.city = city;
this.pic = pic;
this.price = price;
/* option 1
    this.singAmount = function(numberOfSings,budget){
    console.log("Your average word count per sing is : "+ (budget/100)/numberOfSings +" words per sing");

 }  */

}

//option 2
function wordAmount (numberOfSings,budget){
    const wordPerSine = new Sing("",false,budget/numberOfSings);

    console.log("Your average word count per sing is : "+ wordPerSine.price/100 +" words per sing");


 } 


const singArray =[{sing:new Sing("miami",false,12)},
    {sing:new Sing("orlando",false,45)},
    {sing:new Sing("jerusalem",false,46)},
    {sing:new Sing("orlando",true,32)},
    {sing:new Sing("orlando",false,43)},
    {sing:new Sing("jerusalem",true,35)},
    {sing:new Sing("orlando",false,54)},
    {sing:new Sing("jerusalem",true,12)},
    {sing:new Sing("orlando",false,25)},
    {sing:new Sing("miami",true,12)},
    {sing:new Sing("miami",true,55)},
    {sing:new Sing("miami",false,15)}]



const newSing = new Sing();

wordAmount(4,30000);



function theMostInACity(singArray){
    let bigCounter = 0 , tempCounter = 0;
    let biggestCity ="";
    for (let i = 0; i < singArray.length; i++) {
        for (let j = 0; j < singArray.length; j++) {
            if(singArray[i].sing.city==singArray[j].sing.city){
                tempCounter++;
            
            }
           
        }

        if(tempCounter>bigCounter){
                bigCounter=tempCounter;
                biggestCity=singArray[i].sing.city;
        }
        tempCounter=0;
    }


    return biggestCity;
   
}


console.log(theMostInACity(singArray)); 