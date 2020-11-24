const inputs = document.querySelectorAll(".controls input");

inputs.forEach((input) => {
  input.addEventListener("change", updateProperty);
  input.addEventListener("mousemove", updateProperty);
});

function updateProperty() {
  const units = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + units
  );
}
