function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

const controls = document.querySelector("#controls");

createBtn.addEventListener("click", amountOfBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let basicSize = 30;

function createBoxes(amount) {
  let boxes = [];

  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.height = `${size}px;`;
    div.style.width = `${size}px`;
    div.style.backgrounColor = getRandomHexColor();
    boxes.push(div);
  }
  boxesDiv.insertAdjacentHTML("beforeend", boxes);
}

function amountOfBoxes() {
  const amount = +controls.querySelector("input").value;

  console.log(amount);

  createBoxes(amount);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
