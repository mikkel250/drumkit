  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keycode}"]`);
    if (!audio) return; // stop the function from running altogether if there's no audio to play for the key pressed
    audio.currentTime = 0; // rewind to start of the audio clip if keys pressed quickly
    audio.play();
    key.classList.add('playing');
  }


function removeTransition(e) {
  if (e.propertyName != 'transform') return; // skip if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
