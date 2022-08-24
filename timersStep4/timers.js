function timer(timerInitialization){
    this.initializeTimer = timerInitialization;
    this.createTimer = function(){
       let timerContainer = document.querySelector("#timerContainer");

       timerContainer.innerHTML+="<div>"+this.initializeTimer+"</div>"
        console.log("timer inisialzation: ",this.initializeTimer);
    }

}

export default timer;


