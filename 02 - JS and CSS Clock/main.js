const hand = document.querySelector(".hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsInDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesInDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minutesInDegrees}deg)`;

  const hours = now.getHours();
  const hoursInDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;

  // avoid bug display
  if (seconds === 59 || seconds === 0) {
    hand.style.transition = "none";
  }
}

setInterval(updateClock, 1000);
updateClock();
