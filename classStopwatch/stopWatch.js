

/* 
function timeDisplay(){
/*  watch.innerHTML =minutes+":"+seconds+":"+minutes; */
/*  watch.innerHTML =`${minutes}:${seconds}:${milSecounds}`; */
/* } */ 

const startStopButton = document.querySelector("#startStopButton");

let watch = document.querySelector("#stopWatch")
let milSecounds =0 ,seconds=0,minutes=0;
let stop;
let isRuning =false;
function stopWatch(){

    if (isRuning==false){
        stop=setInterval(startClock,10);
         isRuning= true;
         startStopButton.innerHTML="Stop clock"
    }
    else {
        clearInterval(stop);
        isRuning=false;
        startStopButton.innerHTML="Start clock"
    }
}

function startClock(){

    if(milSecounds<100){
        milSecounds++;   
    }
    else {
        milSecounds=0;
        seconds++;
            if(seconds>59){
                
                seconds=0;
                minutes+=1;
            }
                else{
                if (minutes>59) {
                    minutes=0;
                    
                }
            }

    }
    
        watch.innerHTML=zeroCheck(minutes)+":"+zeroCheck(seconds)+":"+zeroCheck(milSecounds);
    
    console.log(seconds);

}

function zeroCheck(time){
let tempTime;
        if(time<10){
            tempTime="0"+time;
        }
        else
        {
            tempTime=time;
        }
        return tempTime;
}

function resetWatch(){
        milSecounds=-1;
        seconds=0;
        minutes=0;
        startClock();

}

function addScore(){
    document.querySelector("#lapTimes").innerHTML+="<li>"+watch.innerHTML+"</il>"
    console.log(watch);
}

startStopButton.addEventListener("click",stopWatch);
document.querySelector("#resetButton").addEventListener("click",resetWatch)
document.querySelector("#lapsButton").addEventListener("click",addScore)