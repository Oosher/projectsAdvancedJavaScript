

function timer(timerInitialization){
    let initializeTimer = timerInitialization;
    let newElement;
    let timerRun;
    let timerText;


    
    function createButton(text,func){

        const button = document.createElement("button");
        button.innerText=text;

        newElement.appendChild(button);

        button.addEventListener("click",func)
    }

    function startTimer(){
        
        clearInterval(timerRun);

        timerRun = setInterval(timerCountdown,1000);

    }

    function timerCountdown(){

        //stops the timer if the counter reaches 0
        if(initializeTimer<=0){

            clearInterval(timerRun);

        }
            else{
            initializeTimer--;

            timerText.innerText=initializeTimer;

            console.log(initializeTimer);
            }
    }


    this.deleteTimer =function(){

        clearInterval(timerRun);

        newElement.remove();

    }

    function stopTimer(){

        clearInterval(timerRun);

    }

    this.createTimer = function(){

        const timerContainer = document.querySelector("#timerContainer");

         /*  timerContainer.innerHTML+="<div>"+this.initializeTimer+"</div>"; */

        //creating an element
        newElement = document.createElement("div");
        
        timerText = document.createElement("h1");
        timerText.innerText=initializeTimer;

        newElement.appendChild(timerText);
        

        /* const startButton = document.createElement("button");
        startButton.innerText="Start Timer";
        const deleteButton = document.createElement("button");
        deleteButton.innerText="delete timer";
        newElement.appendChild(startButton);
        newElement.appendChild(deleteButton); */

        
        createButton("Start Timer",startTimer);
        createButton("delete timer",this.deleteTimer);
        createButton("stop timer" ,stopTimer)
        

        timerContainer.appendChild(newElement);

        
    }

}

export default timer;


