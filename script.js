window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    console.log(audio);
    if(!audio) return; 
    audio.currentTime = 0; //rewinds to the start
    audio.play();

    key.classList.add("playing");


});

window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!key) return;
    key.classList.remove('playing');
  })
