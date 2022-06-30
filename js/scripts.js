const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const marioJump = (event) => {

    if (event.code == "Space"){
        mario.classList.add("mario-jump");
        setTimeout(function () {
            mario.classList.remove("mario-jump");
        }, 600);
    }
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    //console.log(marioPosition)
    if (pipePosition <= 100 && pipePosition > 0 && marioPosition <= 100){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './img/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval();
    }

}, 10);

document.addEventListener("keypress", marioJump);