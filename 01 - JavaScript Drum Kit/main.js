// On key press, trigger sound
document.addEventListener("keyup", (event) => {
  const keyCode = event.keyCode;
  const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  playSound(sound, key);
});

function playSound(sound, key) {
  if (sound !== null) {
    key.classList.add("playing");
    sound.currentTime = 0;
    sound.play();
    key.addEventListener("transitionend", removeClass);
  }
}

function removeClass(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
}
