
let isRuning =false;
/* methods instead of -- getElementbyId();

const view = document.querySelector("#stopWatch");
console.log(view);
const p =document.querySelector("p");
console.log(p);
const p =document.querySelectorAll("p");
console.log(p);
const randomClass = document.querySelector(".randomClass");
console.log(randomClass);
 */
const p =document.querySelectorAll("p");
console.log(p);


const listItem = document.querySelectorAll(".listItem");
 let i=1;
listItem.forEach(function(itemList)
 {
    itemList.innerHTML=i;
    i++
});
let stop;
let milSeconds=0,seconds=0 ,minutes=0;

function stopWatch(){

    if (isRuning==false){
        stop=setInterval(runninWatch,10);
         isRuning= true;
    }
    else {
        clearInterval(stop);
        isRuning=false;
        milSeconds=0;
        seconds=0 ;
        minutes=0;
       

    }
}

function runninWatch(){
    
    
    if (milSeconds<=100) {
        p[2].innerHTML=":"+milSeconds;

        milSeconds++;
    }else{
        milSeconds=0;
        seconds+=1;
        p[1].innerHTML=":"+seconds;
        if(seconds>=60){
            seconds=0;
            minutes+=1;
            p[0].innerHTML=minutes;
            if(minutes>=60){
                minutes=0;
            }
        }
    }
    
    console.log(milSeconds);

}


document.querySelector("#startStopButton").addEventListener("click",stopWatch);