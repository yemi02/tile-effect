const container = document.querySelector(".container");
const hexColors = [
  "#FF5F5F", // Brighter Red
  "#9FCC6F", // Brighter Green
  "#4F9FDF", // Brighter Blue
  "#8B6FFF", // Brighter Indigo
];
let tile = document.createElement("div");
tile.classList.add("tile");

const themeButton = document.querySelector(".theme-button");
let body = document.body;
let theme = "#f0f0f0";

body.style.backgroundColor = theme;

for (let i = 0; i < 3600; i++) {
  container.appendChild(tile.cloneNode());
}

let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) => {
  tile.addEventListener("mouseover", () => {
    const randomColor = hexColors[Math.floor(Math.random() * hexColors.length)];
    tile.classList.add("no-transition");
    tile.style.backgroundColor = randomColor;
  });

  tile.addEventListener("mouseout", () => {
    tile.classList.remove("no-transition");
    tile.style.backgroundColor = theme;
  });
});

themeButton.addEventListener("click", () => {
  if (theme === "#f0f0f0") {
    body.style.backgroundColor = "#111";
    theme = "#111";
    tiles.forEach((tile) => {
      tile.classList.add("no-transition");
      tile.style.backgroundColor = theme;
    });
  } else {
    body.style.backgroundColor = "#f0f0f0";
    theme = "#f0f0f0";
    tiles.forEach((tile) => {
      tile.classList.add("no-transition");
      tile.style.backgroundColor = theme;
    });
  }
});
