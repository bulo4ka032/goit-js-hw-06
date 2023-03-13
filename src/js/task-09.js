function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
//const body = document.querySelectorAll("body");

changeColorBtn.addEventListener("click", handleColorChange);

function handleColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}
