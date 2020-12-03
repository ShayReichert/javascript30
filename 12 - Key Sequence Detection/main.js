const keyPressed = [];
const secretCode = "bon anniversaire jéhanne";

window.addEventListener("keyup", (e) => {
  keyPressed.push(e.key);
  keyPressed.splice(
    -secretCode.length - 1,
    keyPressed.length - secretCode.length
  );

  if (keyPressed.join("").includes(secretCode)) {
    cornify_add();
  }
});
