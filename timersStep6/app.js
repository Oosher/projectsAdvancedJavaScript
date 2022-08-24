/* const timer1 =new timer(60);
console.log(timer1);

const timer2 =new timer(888);
console.log(timer2); */

import timer from "./timers.js";

const timeInput = document.querySelector("#timeInput");

function addTimer(){

    let initialTime= timeInput.value;

    const timer3 =new timer(initialTime);
    timer3.createTimer();

    console.log(initialTime,timer3);

}




document.querySelector("#createTimer").addEventListener("click",addTimer);