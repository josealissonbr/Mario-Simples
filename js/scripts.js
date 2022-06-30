const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const blackBoard = document.querySelector('.black-board');
var loopMusic = new Audio("./mp3/overworld.mp3");
var jumpAudio = new Audio("./mp3/jump.mp3");

var isGameOver = false;

/** Simulate click to start audio */
mario.click();

const marioJump = (event) => {
    if (isGameOver)
    return;

    if (event.code == "Space"){
        mario.classList.add("mario-jump");
        jumpAudio.play();
        jumpAudio.volume = 0.4
        setTimeout(function () {
            mario.classList.remove("mario-jump");
        }, 600);
    }
}

const loop = setInterval(() => {
    if (isGameOver)
    return;

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    //console.log('loop!')
    if (pipePosition <= 100 && pipePosition > 0 && marioPosition <= 100){
        isGameOver = true;
        
        

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        //mario.style.animation = 'none';
        //mario.style.bottom = `${marioPosition}px`;
        mario.src = './img/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        setTimeout(function () {
            mario.classList.add("mario-dead");
            setTimeout(function () {
                mario.classList.remove("mario-dead");
                mario.style.animation = 'none';
                mario.style.bottom = `-140px`;
                blackBoard.classList.add('black-board-dead');
                setTimeout(function () {
                    blackBoard.style.opacity = 1;
                }, 2000);
            }, 500);
        }, 500);

        

        loopMusic.pause();

        var gameOverAudio = new Audio("./mp3/gameover.mp3");
        gameOverAudio.play();
        
        
        clearInterval();
    }else{
        if (loopMusic.duration > 0 && !loopMusic.paused) {

            //Its playing...do your job
        
        } else {
            loopMusic.play();
            loopMusic.volume = 0.2;
        }
    }



}, 10);

document.addEventListener("keypress", marioJump);