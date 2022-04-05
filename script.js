const dino = document.querySelector(".dino");

var dinoPosition = 0;

var dinoJumping = false;

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