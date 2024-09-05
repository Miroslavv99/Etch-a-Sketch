const mainDiv = document.querySelector(".main-div");
const changeButton = document.querySelector(".btn");
const gridDiv = document.querySelector(".grid-div");
const resetButton = document.querySelector(".reset");

changeButton.addEventListener("click", () => {
  let enter = parseInt(prompt("Please enter your grid size [8px - 64px.]"));

  if (isNaN(enter) || enter < 8 || enter > 64) {
    alert("Please enter a number from 8 to 64!");
    return;
  }

  gridDiv.innerHTML = "";

  const gridSize = 480 / enter;

  for (let i = 0; i < enter * enter; i++) {
    const grid = document.createElement("div");
    grid.className = "cube";
    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
    grid.style.opacity = 0;

    gridDiv.appendChild(grid);

    grid.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(grid.style.opacity);
      if (currentOpacity < 1) {
        grid.style.opacity = currentOpacity + 0.2;
      }
    });
  }
});

resetButton.addEventListener("click", () => {
  gridDiv.innerHTML = "";
});
