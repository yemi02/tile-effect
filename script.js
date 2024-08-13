const container = document.querySelector(".container");
const hexColors = [
  "#FF5F5F", // Brighter Red
  "#9FCC6F", // Brighter Green
  "#4F9FDF", // Brighter Blue
  "#8B6FFF", // Brighter Indigo
];

for (let i = 0; i < 3600; i++) {
  let tile = document.createElement("div");
  tile.classList.add("tile");
  container.appendChild(tile);
}

const tiles = document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("mouseover", () => {
    const randomColor = hexColors[Math.floor(Math.random() * hexColors.length)];
    tile.classList.add("no-transition");
    tile.style.backgroundColor = randomColor;
  });

  tile.addEventListener("mouseout", () => {
    tile.classList.remove("no-transition");
    tile.style.backgroundColor = "#f0f0f0";
  });
});
