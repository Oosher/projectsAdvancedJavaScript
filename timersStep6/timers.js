

function timer(timerInitialization){
    let initializeTimer = timerInitialization;
    let newElement;
    let countDownInterval;
    let timerText ;
    this.deleteTimer =function(){

        newElement.remove();

         clearInterval(countDownInterval);

    }

    function timerCountDown(){
     
        initializeTimer--;

        timerText.innerText=initializeTimer;
        
        if(initializeTimer<=0)
        {
            clearInterval(countDownInterval);
        }

    }

    this.timerStop =function () {

        clearInterval(countDownInterval);
        
    }

    this.createTimer = function(){

        const timerContainer = document.querySelector("#timerContainer");

        /* timerContainer.innerHTML+="<div>"+this.initializeTimer+"</div>"; */

        //creating an element
        newElement = document.createElement("div");
        /* newElement.innerHTML="new timer"+ initializeTimer +" <br>"; */

        timerText =document.createElement("h1");
        timerText.innerText=initializeTimer;

        const startButton = document.createElement("button");
        startButton.innerText="Start Timer";

        const deleteButton = document.createElement("button");
        deleteButton.innerText="delete timer";


        const stopTimer = document.createElement("button");
        stopTimer.innerText="Stop timer"
        
        timerContainer.appendChild(newElement);

        newElement.appendChild(timerText);
        newElement.appendChild(startButton);
        newElement.appendChild(stopTimer);
        newElement.appendChild(deleteButton);

       

        deleteButton.addEventListener("click",this.deleteTimer)
 
        stopTimer.addEventListener("click", this.timerStop)

        startButton.addEventListener("click",function(){

            clearInterval(countDownInterval);

            countDownInterval= setInterval(timerCountDown, 1000);
           
        });
    }

}

export default timer;


