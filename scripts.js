const mainDiv = document.querySelector(".main-div");
const buttonDiv = document.querySelector(".button-div");
const gridDiv = document.querySelector(".grid-div");

buttonDiv.addEventListener("click", () => {
  let enter = parseInt(prompt("Please enter your grid size [8px - 64px.]"));

  if (isNaN(enter) || enter < 8 || enter > 64) {
    alert("Please enter a number from 8 to 64!");
    return;
  }

  gridDiv.innerHTML = "";

  const cellSize = 480 / enter;

  for (let i = 0; i < enter * enter; i++) {
    const grid = document.createElement("div");
    grid.className = "cube";
    grid.style.height = `${cellSize}px`;
    grid.style.width = `${cellSize}px`;

    gridDiv.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "#0f766e";
    });
  }
});
