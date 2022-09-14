document.addEventListener("keydown",playerHandling);
document.addEventListener("DOMContentLoaded",startGame)
// const car = document.querySelector(".car");

function playerHandling(event){

    player.movement(event.key);
    for (let i = 0; i < bombs.length; i++) {
        bombs[i].newBomb.bombCollition(player.locationColumn,player.locationRow);
        
    }
    

}
const gameContainer = document.querySelector(".gameContainer");
function startGame(){



gameContainer.appendChild(player.car);

gameContainer.appendChild(bombs[0].newBomb.bomb);
bombs[0].newBomb.bombPlacement();

}

    /*if(event.key=="ArrowDown"){
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
 */


function Car(){
    this.direction = "arrowRight";
    this.locationColumn = 1;
    this.locationRow = 1;
    this.car = document.createElement("img");
    this.car.src="./gameImeges/sport-car.png";
    this.car.className="car";
    this.movement = function (pressedKey)
    {
        
        if(pressedKey=="ArrowDown"){
            this.car.style.transform = "rotate(90deg)";
            if (pressedKey==this.direction) {
                this.locationRow++;
                this.car.style.gridRow=this.locationRow;
            }
         
            

        }
        if(pressedKey=="ArrowUp"){
            this.car.style.transform = "rotate(-90deg)";
            if (pressedKey==this.direction) {
                this.locationRow--;
                this.car.style.gridRow=this.locationRow;
            }
            

        }
        if(pressedKey=="ArrowRight"){
            this.car.style.transform = "rotate(0deg)";
            if (pressedKey==this.direction) {
                this.locationColumn++;
                this.car.style.gridColumn=this.locationColumn;
            }

        }
        if(pressedKey=="ArrowLeft"){
            this.car.style.transform = "scaleX(-1)";
            if (pressedKey==this.direction) {
                this.locationColumn--;
                this.car.style.gridColumn=this.locationColumn;
            }

        }
        this.checkEnds();

        this.direction=pressedKey;

        
        /* this.move(pressedKey); */
};

    this.checkEnds = function (){

        if(this.locationColumn>10 || this.locationColumn<1){
        
            this.locationColumn=5;
            this.car.style.gridColumn=this.locationColumn;
        
        }

        if (this.locationRow>10||this.locationRow<1) {
            console.log("bruh");
            this.locationRow=5;
            this.car.style.gridRow=this.locationRow;
        }

 };

}


    /* this.move = function (keyPress) {

    if(keyPress=="ArrowDown"){
        player.locationRow++;
        player.car.style.gridRow=player.locationRow;

    }
    if(keyPress=="ArrowUp"){
        player.locationRow--;
        player.car.style.gridRow=player.locationRow;

    }
    if(keyPress=="ArrowRight"){
        player.locationColumn++;
        player.car.style.gridColumn=player.locationColumn;

    }
    if(keyPress=="ArrowLeft"){
        player.locationColumn--;
        player.car.style.gridColumn=player.locationColumn;

    }
  } */

    
    




  function Bomb(){
    this.locationColumn;
    this.locationRow;
    this.bomb = document.createElement("img");
    this.bomb.src="./gameImeges/bomb.png";
    this.bomb.className="bomb";

    this.bombPlacement = function(){
        this.locationColumn = Math.floor(Math.random()*9)+1;
        this.locationRow = Math.floor(Math.random()*9)+1;
        this.bomb.style.gridColumn=this.locationColumn;
        this.bomb.style.gridRow=this.locationRow;

        console.log(this.locationColumn,this.locationRow);
    }


    this.bombCollition =function (carCol,carRow){

        if(this.locationColumn==carCol&&this.locationRow==carRow){
            this.bombPlacement(); 
            addMoreBombs();
            
        }

    }

  }




  function addMoreBombs(){
    
    bombs.push({newBomb:new Bomb()});
    for (let i = 0; i < bombs.length; i++) {
        gameContainer.appendChild(bombs[i].newBomb.bomb);
        bombs[i].newBomb.bombPlacement();
        
    }
  
  }


const player = new Car();

const bombs = [{newBomb:new Bomb()},{newBomb:new Bomb()}];

