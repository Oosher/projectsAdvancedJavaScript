

/* 
function timeDisplay(){
/*  watch.innerHTML =minutes+":"+seconds+":"+minutes; */
/*  watch.innerHTML =`${minutes}:${seconds}:${milSecounds}`; */
/* } */ 

let watch = document.querySelector("#stopWatch")
let milSecounds =0 ,seconds=0,minutes=0;
let stop;
let isRuning =false;
function stopWatch(){

    if (isRuning==false){
        stop=setInterval(startClock,10);
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


function startClock(){
    if(milSecounds<=100){
        milSecounds++;
    
    }
    else {
            milSecounds=0;
            seconds++;

            if(seconds>=60){
                seconds=0;
                minutes+=1;

                if (minutes>=60) {
                    minutes=0;
                    
                }

            }

    }

watch.innerHTML=minutes+":"+seconds+":"+milSecounds;
}

document.querySelector("#startStopButton").addEventListener("click",stopWatch)
