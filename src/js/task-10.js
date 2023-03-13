function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

const controls = document.querySelector("#controls input");

createBtn.addEventListener("click", amountOfBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let basicSize = 30;

function createBoxes(amount) {
  let boxes = "";
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    boxes += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    // console.log(boxes);
  }
  boxesDiv.insertAdjacentHTML("beforeend", boxes);
}

function amountOfBoxes() {
  //const amount = +controls.querySelector("input").value;
  const amount = Number(controls.value);
  console.log(amount);
  createBoxes(amount);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
