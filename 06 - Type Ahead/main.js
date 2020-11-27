// Get datas
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const citiesData = fetch(endpoint)
  .then((resp) => resp.json())
  .then((data) => cities.push(...data));

// Display datas
const searchInput = document.querySelector(".search");
const searchResults = document.querySelector(".suggestions");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

function findMatches(wordToMatch, cities) {
  return cities.filter((location) => {
    const regex = new RegExp(wordToMatch, "gi");
    return location.city.match(regex) || location.state.match(regex);
  });
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((location) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = location.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      const stateName = location.state.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      return `
            <li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${formatNumber(
                location.population
              )}</span> 
            </li>`;
    })
    .join("");
  searchResults.innerHTML = html;

  if (!searchInput.value) {
    cleanDropdown();
  }
}

function cleanDropdown() {
  searchResults.innerHTML = "";
}
