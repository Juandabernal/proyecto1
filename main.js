window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; //para la funcion hasta que corra toda
});