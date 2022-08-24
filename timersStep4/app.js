
import timer from "./timers.js";


const timer1 =new timer(60);
console.log(timer1);


const timer2 =new timer(888);
console.log(timer2);

function addTimer(){
    const initialTime = document.querySelector("#timeInput").value;



    console.log(initialTime);

}




document.querySelector("#createTimer").addEventListener("click",addTimer);