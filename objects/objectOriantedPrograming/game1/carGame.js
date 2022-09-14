document.addEventListener("keydown",downMovement);


let car = document.querySelector(".car");
function downMovement(event){

    if(event.key=="ArrowDown"){
        console.log("event.key"); 
        car.style.transform = "rotate(90deg)";
    }
    if(event.key=="ArrowUp"){
        console.log("event.key"); 
        car.style.transform = "rotate(-90deg)";
    }
    if(event.key=="ArrowRight"){
        console.log("event.key"); 
        car.style.transform = "rotate(0deg)";
    }
    if(event.key=="ArrowLeft"){
        console.log("event.key"); 
        car.style.transform = "scaleX(-1)";
    }
   

}