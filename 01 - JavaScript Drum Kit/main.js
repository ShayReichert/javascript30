document.addEventListener("keydown", handleKeyPressed);

function handleKeyPressed(event) {
  const keyCode = event.keyCode || event.key;
  const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  playSound(sound, key);
}

function playSound(sound, key) {
  if (sound !== null) {
    key.classList.add("playing");
    sound.currentTime = 0;
    sound.play();
    key.addEventListener("transitionend", removeClass);
  }
}

function removeClass(event) {
  if (event.propertyName !== "transform") return; // skip if it's not a transform transition
  event.target.classList.remove("playing");
}
