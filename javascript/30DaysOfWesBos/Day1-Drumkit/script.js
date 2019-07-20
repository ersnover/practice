window.addEventListener('keydown',function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)      // use keypress keyCode to link to audio element via data-key       (for sound)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)         // links keypress to button div         (for animation)

    if (!audio) {       //prevented "null" audio elements (keys without an element attached)
    return
    }

    audio.currentTime = 0;      // rewinds to start of audio clip whenever key is re-pressed
    audio.play()

    key.classList.add('playing')            // adds styling class to button div

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;     // filters out properties other than "transform"

    this.classList.remove('playing')            // removes styling class

}

    const keys = document.querySelectorAll('.key')          // creates array containing all .key objects
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))            // iterates through array, adds "transitionend" event listener to each key

})