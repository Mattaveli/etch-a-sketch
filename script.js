let grid = document.querySelector(".grid");
let gridArea = 25;

function setGrid(size) {
  grid.style.cssText = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr) `;
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    //square.textContent = i;
    square.classList.add("square");
    grid.appendChild(square);
  }
  colorCell();
}

let color;
let colorDropdown = document.querySelector("#color");
colorDropdown.addEventListener("click", () => {
  color = colorDropdown.value;
});

setGrid(gridArea);
//colorCell();
let reset = document.querySelector(".reset-button");
reset.addEventListener("click", resetGrid);

let gridSize = document.querySelectorAll(".size-button");
gridSize.forEach((square) => {
  square.addEventListener("click", () => {
    gridArea = parseInt(square.value);
    console.log(square.value);
    resetGrid();
  });
});

function randColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

function colorCell() {
  let isColoring = false;
  const body = document.querySelector("body");
  const cells = document.querySelectorAll(".square");
  cells.forEach((cell) => {
    // cell.addEventListener("mousedown", () => {
    //   isColoring = true;
    // });
    // cell.addEventListener("mousemove", (cell) => {
    //   // highlight the mouseover target
    //   if (isColoring) {
    //     cell.target.style.cssText = "background-color: " + color;
    //     if (color == "random") {
    //       cell.target.style.cssText = "background-color: " + randColor();
    //     }
    //   }
    // });
    // cell.addEventListener("mouseup", () => {
    //   if (isColoring) {
    //     isColoring = false;
    //   }
    // });
    // body.addEventListener("mouseup", () => {
    //   if (isColoring) {
    //     isColoring = false;
    //   }
    // });
    cell.addEventListener("mouseover", (cell) => {
      //highlight the mouseover target
      cell.target.style.cssText = "background-color: " + color;
      if (color == "random") {
        cell.target.style.cssText = "background-color: " + randColor();
      }
    });
  });
}

function resetGrid() {
  console.log("reset");
  const boxes = document.querySelectorAll(".square");

  boxes.forEach((box) => {
    box.remove();
  });

  setGrid(gridArea);
}
