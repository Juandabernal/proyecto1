window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //para la funcion hasta que corra toda
    audio.currenTime = 0; // tiempo de activacion 
    audio.play();
    console.log(key)
});