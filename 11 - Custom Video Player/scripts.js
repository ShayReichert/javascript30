const playPause = document.querySelector(".player__button");
const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volumeBar = document.querySelector(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");
const fullscreen = document.querySelector(".fullscreen");

// CUSTOM PLAYER FUNCTIONS
function handlePlayPause() {
  if (video.paused) {
    playPause.textContent = "▐▐";
    video.play();
  } else {
    playPause.textContent = "►";
    video.pause();
  }
}

video.ontimeupdate = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
};

function updateProgressBar(e) {
  const holdTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = holdTime;
}

function changeVolumeOrSpeed() {
  video[this.name] = this.value;
}

function skipTime() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleFullScreen() {
  video.requestFullscreen();
}

// EVENTLISTENER
playPause.addEventListener("click", handlePlayPause);
video.addEventListener("click", handlePlayPause);

let mousedown = false;
progress.addEventListener("click", updateProgressBar);
progress.addEventListener("mousemove", (e) => mousedown && hold(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

ranges.forEach((range) => {
  range.addEventListener("change", changeVolumeOrSpeed);
  range.addEventListener("mousemove", changeVolumeOrSpeed);
});

skipButtons.forEach((button) => button.addEventListener("click", skipTime));

fullscreen.addEventListener("click", handleFullScreen);
video.addEventListener("dblclick", handleFullScreen);
