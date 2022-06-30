const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const marioJump = (event) => {

    if (event.code == "Space"){
        mario.classList.add("mario-jump");
        setTimeout(function () {
            mario.classList.remove("mario-jump");
        }, 400);
    }
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    
    if (pipePosition <= 100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
    }

}, 10);

document.addEventListener("keypress", marioJump);