function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  images.forEach((image) => {
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    const imageBottom = image.offsetTop + image.height;

    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", debounce(checkSlide));

// window.scrollY = nombre de pixel entre le haut de page et le haut de notre écran.
// window.innerHeight = hauteur de notre écran.
// image.height = hauteur de l'image
// slideInAt : calcul le point où l'on va montrer l'image (donc ajouter une classe)

// image.offsetTop = distance entre le haut de l'image et le haut de page.
// image.offsetTop + image.height = distance entre le bas de l'image et le haut de page.
//  isHalfShown  = True si le haut de l'image est à la moitié de notre écran.
// isNotScrolledPast = vérifie si on n'a pas passé l'image
