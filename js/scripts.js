document.addEventListener("keypress", function(event) {
    var mario = document.getElementById('mario');
    if (event.code == "Space"){
        mario.classList.add("mario-jump");
        setTimeout(function () {
            mario.classList.remove("mario-jump");
        }, 400)
    }
});