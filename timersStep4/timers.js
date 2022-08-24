function timer(timerInitialization){
    this.initializeTimer = timerInitialization;
    this.createTimer = function(){
        
        console.log("create timer");
    }

}

export default timer;