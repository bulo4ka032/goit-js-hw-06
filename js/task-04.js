const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

decrButton.addEventListener("click", handleDecrClick);

function handleDecrClick() {
  counterValue -= 1;
  console.log("click - 1");
  value.innerHTML = counterValue;
}

incrButton.addEventListener("click", handleIncrClick);

function handleIncrClick() {
  counterValue += 1;
  console.log("click + 1");
  value.innerHTML = counterValue;
}
