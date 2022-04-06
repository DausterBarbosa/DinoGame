const dino = document.querySelector(".dino");
const gameContainer = document.querySelector(".gameContainer");

var dinoPosition = 0;
var obstaclePosition = 0;

var dinoJumping = false;

function createObstacle(){
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    gameContainer.appendChild(obstacle);

    const obstacleInterval = setInterval(() => {
        if(obstaclePosition === 1100){
            clearInterval(obstacleInterval);
            gameContainer.removeChild(obstacle);
            obstaclePosition = 0;
        } else {
            obstaclePosition += 10;
            obstacle.style.right = obstaclePosition + "px";
        }
    }, 20);

    setTimeout(createObstacle, 5000);
}

function dinoJump(event){
    if(event.keyCode === 32 && dinoJumping === false){
        const jumpInterval = setInterval(() => {
            dinoPosition += 20;

            dinoJumping = true;
    
            if(dinoPosition > 100){
                clearInterval(jumpInterval);
    
                const downInterval = setInterval(() => {
                    dinoPosition -= 20;
    
                    dino.style.bottom = dinoPosition + "px";
    
                    if(dinoPosition === 0){
                        clearInterval(downInterval);

                        dinoJumping = false;
                    }
                }, 20);
            }
    
            dino.style.bottom = dinoPosition + "px";
        }, 20);
    }
}

document.addEventListener("keydown", dinoJump);
createObstacle();