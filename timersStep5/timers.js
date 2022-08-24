function timer(timerInitialization){
    this.initializeTimer = timerInitialization;
    this.createTimer = function(){

        let timerContainer = document.querySelector("#timerContainer");

         /*  timerContainer.innerHTML+="<div>"+this.initializeTimer+"</div>"; */

        //creating an element
       const newElement = document.createElement("div");
       newElement.innerText="new timer"
       
       timerContainer.appendChild(newElement);

        console.log("timer inisialzation: ",this.initializeTimer);
    }

}

export default timer;


