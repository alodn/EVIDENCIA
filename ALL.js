document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.nav-link');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var audio = new Audio('click-sound.mp3');
            audio.play();
        });
    });
});