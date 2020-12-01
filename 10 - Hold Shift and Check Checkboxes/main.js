const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

function handleCheck(event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      inBetween && (checkbox.checked = true);
    });
  }
  lastChecked = this;
}
