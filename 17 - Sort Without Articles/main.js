const movies = [
  "The Hate U Give",
  "The Twilight Zone",
  "Star Wars: The Last Jedi",
  "Mad Max: Fury Road",
  "The Witch",
  "Spider-Man: Into the Spider-Verse",
  "The Stepford Wives",
  "We are the Best",
  "Parasite",
  "Hale County This Morning, This Evening",
  "A Kid Like Jake",
  "American Son",
  "Moonlight",
];

function withoutArticle(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = movies.sort((a, b) =>
  withoutArticle(a) > withoutArticle(b) ? 1 : -1
);

document.querySelector("#movies").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");
