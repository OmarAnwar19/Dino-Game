const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

var score = 0;

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

let counter = setInterval(function (){
    score = score % 360 + 1
}, 100);

let active = setInterval(function(){
    //get current dino y coordinate
    let dinoTop  = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    //get current cactus x coordinate
    let cactusLeft  = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //chcek if they have collided
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 110) {
        alert("Game Over! \nSCORE: " + score + "\n\nRefresh page to play again!");
    }
}, 10);

document.addEventListener("click", function(event) {
    jump();
});

document.addEventListener("keydown", function(event) {
    jump();
});