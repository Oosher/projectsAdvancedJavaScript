

function timer(timerInitialization){
    this.initializeTimer = timerInitialization;
    let newElement;
    this.deleteTimer =function(){

        newElement.remove();

    }


    this.createTimer = function(){

        const timerContainer = document.querySelector("#timerContainer");

         /*  timerContainer.innerHTML+="<div>"+this.initializeTimer+"</div>"; */

        //creating an element
        newElement = document.createElement("div");
        newElement.innerHTML="new timer"+ this.initializeTimer +" <br>";

        const startButton = document.createElement("button");
        startButton.innerText="Start Timer";

        const deleteButton = document.createElement("button");
        deleteButton.innerText="delete timer";

        newElement.appendChild(startButton);
        newElement.appendChild(deleteButton);

        timerContainer.appendChild(newElement);

        deleteButton.addEventListener("click",this.deleteTimer)
    }

}

export default timer;


