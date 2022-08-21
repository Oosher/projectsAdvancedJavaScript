const watch = document.querySelector("#stopWatch");

let milSecounds =0 ,seconds=0,minutes=0;


function timeDisplay(){
/*  watch.innerHTML =minutes+":"+seconds+":"+minutes; */
 watch.innerHTML =`${minutes}:${seconds}:${milSecounds}`;
}

timeDisplay();