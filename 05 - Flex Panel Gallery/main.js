const panels = Array.from(document.querySelectorAll(".panel"));

panels.map((panel) => {
  panel.addEventListener("click", open);
  panel.addEventListener("transitionend", toggleActiveClass);
});

function open() {
  if (this.classList.contains("open")) {
    panels.forEach((panel) => {
      panel.classList.remove("open");
    });
  } else {
    panels.forEach((panel) => {
      panel.classList.remove("open");
    });
    this.classList.add("open");
  }
}

function toggleActiveClass(event) {
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
