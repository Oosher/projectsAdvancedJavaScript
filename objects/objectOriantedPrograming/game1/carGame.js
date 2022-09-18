document.addEventListener("keydown", playerHandling);
document.addEventListener("DOMContentLoaded", startGame);
// const car = document.querySelector(".car");


//checks if the player is touching a bomb or a target and send the event to the movement keys
function playerHandling(event) {

    player.movement(event.key);
    for (let i = 0; i < bombs.length; i++) {
        bombs[i].newBomb.bombCollition(player.locationColumn, player.locationRow);

    }
    target.targetCollition(player.locationColumn, player.locationRow);


}

const gameContainer = document.querySelector(".gameContainer");

function startGame() {

    gameContainer.appendChild(player.car);

    gameContainer.appendChild(bombs[0].newBomb.bomb);
    gameContainer.appendChild(target.tarGet);
    bombs[0].newBomb.bombPlacement();
    target.targetPlacement();

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


function Car() {
    this.direction = "arrowRight";
    this.locationColumn = 1;
    this.locationRow = 1;
    this.car = document.createElement("img");
    this.car.src = "./gameImeges/sport-car.png";
    this.car.className = "car";
    this.movement = function (pressedKey) {

        if (pressedKey == "ArrowDown") {
            this.car.style.transform = "rotate(90deg)";
            if (pressedKey == this.direction) {
                this.locationRow++;
                this.car.style.gridRow = this.locationRow;
            }



        }
        if (pressedKey == "ArrowUp") {
            this.car.style.transform = "rotate(-90deg)";
            if (pressedKey == this.direction) {
                this.locationRow--;
                this.car.style.gridRow = this.locationRow;
            }


        }
        if (pressedKey == "ArrowRight") {
            this.car.style.transform = "rotate(0deg)";
            if (pressedKey == this.direction) {
                this.locationColumn++;
                this.car.style.gridColumn = this.locationColumn;
            }

        }
        if (pressedKey == "ArrowLeft") {
            this.car.style.transform = "scaleX(-1)";
            if (pressedKey == this.direction) {
                this.locationColumn--;
                this.car.style.gridColumn = this.locationColumn;
            }

        }

        this.checkEnds();

        this.direction = pressedKey;


        /* this.move(pressedKey); */
    };

    this.checkEnds = function () {

        if (this.locationColumn > 10 || this.locationColumn < 1) {

            this.locationColumn = 5;
            this.car.style.gridColumn = this.locationColumn;

        }

        if (this.locationRow > 10 || this.locationRow < 1) {
            console.log("bruh");
            this.locationRow = 5;
            this.car.style.gridRow = this.locationRow;
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





//this object creates new bomb with a random location and stops the game on collision

function Bomb() {
    this.locationColumn;
    this.locationRow;
    this.bomb = document.createElement("img");
    this.bomb.src = "./gameImeges/bomb.png";
    this.bomb.className = "bomb";

    //creates a new random placement for the bomb
    this.bombPlacement = function () {
        this.locationColumn = Math.floor(Math.random() * 9) + 1;
        this.locationRow = Math.floor(Math.random() * 9) + 1;
        if((player.locationColumn==this.locationColumn&&player.locationRow==this.locationRow)||(target.locationColumn==this.locationColumn&&target.locationRow==this.locationRow)){
             this.locationColumn = Math.floor(Math.random() * 9) + 1;
            this.locationRow = Math.floor(Math.random() * 9) + 1;
             this.locationColumn = Math.floor(Math.random() * 9) + 1;
             this.locationRow = Math.floor(Math.random() * 9) + 1;
        }else{
             this.bomb.style.gridColumn = this.locationColumn;
             this.bomb.style.gridRow = this.locationRow;
        }
      

        console.log(this.locationColumn, this.locationRow);
    }

    //checks if teh player touched the bomb and ends the game if he did
    this.bombCollition = function (carCol, carRow) {

        if (this.locationColumn == carCol && this.locationRow == carRow) {
            this.bombPlacement();
            gameContainer.innerHTML = "Game over <button class = 'reset'>Reset game</button>";

            document.querySelector(".reset").addEventListener("click", () => {

                document.location.reload();
            })

        }

    }

}


function Target() {
    this.locationColumn;
    this.locationRow;
    this.tarGet = document.createElement("img");
    this.tarGet.src = "./gameImeges/target.png";
    this.tarGet.className = "target";
    this.score = 0;
    //placing the target in a random location
    this.targetPlacement = function () {
        this.locationColumn = Math.floor(Math.random() * 9) + 1;
        this.locationRow = Math.floor(Math.random() * 9) + 1;
        this.tarGet.style.gridColumn = this.locationColumn;
        this.tarGet.style.gridRow = this.locationRow;

        console.log(this.locationColumn, this.locationRow);
    }

    //tests if the player touched the target an adds a score every time that it happens and move the target to a different location
    this.targetCollition = function (carCol, carRow) {

        if (this.locationColumn == carCol && this.locationRow == carRow) {
            this.targetPlacement();
            addMoreBombs();
            this.score++;
            document.querySelector(".score").innerHTML = "Your score:" + this.score;
        }

    }

}
//adding more bombs by crating more bombs and adding them to the bomb array and then running the bomb placement function on every bomb severalty
function addMoreBombs() {

    bombs.push({newBomb: new Bomb()});
    for (let i = 0; i < bombs.length; i++) {
        gameContainer.appendChild(bombs[i].newBomb.bomb);
        bombs[i].newBomb.bombPlacement();

    }

}


const player = new Car();

const bombs = [{
    newBomb: new Bomb()
}, {
    newBomb: new Bomb()
}];

const target = new Target();