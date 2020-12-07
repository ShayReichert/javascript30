const hero = document.querySelector(".hero");
const title = document.querySelector(".hero h1");
const blur = 10;

function moveShadows(e) {
  const x = e.movementX;
  const y = e.movementY;

  title.style.textShadow = `
  ${x}px ${y}px ${blur}px #E06A4E,
  ${-x}px ${-y}px ${blur}px #DEB853,
  ${y}px ${y}px ${blur}px #789F8A,
  ${-y}px ${-x}px ${blur}px #0A373A`;
}

hero.addEventListener("mousemove", moveShadows);

// Or
// let walk = 200;

// function shadow(e) {
//   const { offsetWidth: width, offsetHeight: height } = hero;
//   let { offsetX: x, offsetY: y } = e;

//   // Si il y a des éléments nestés dans le hero, les offsetX et offsetY se font sur l'élement nesté !
//   if (this !== e.target) {
//     x = x + e.target.offsetTop;
//     y = y + e.target.offsetLeft;
//   }

//   // Pour que les valeurs deviennent négatives quand on passe le milieu de l'écran avec le curseur.
//   const xWalk = Math.round((x / width) * walk - walk / 2);
//   const yWalk = Math.round((y / width) * walk - walk / 2);

//   title.style.textShadow = `
//   ${xWalk}px ${yWalk}px #ff02ee,
//   ${xWalk * -1}px ${yWalk * -1}px #02fff6,
//   ${yWalk}px ${xWalk}px #ffaa00,
//   ${yWalk * -1}px ${xWalk * -1}px #02ff3d`;
// }

// hero.addEventListener("mousemove", shadow);
