function timer(timerInitialization){
    this.initializeTimer = timerInitialization;
    this.createTimer = function(){
        
        console.log("timer inisialzation: ",this.initializeTimer);
    }

}

export default timer;


