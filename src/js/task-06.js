const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", eventFun);

function eventFun(event) {
  if (
    +event.target.value.length === +validationInput.getAttribute("data-length")
  ) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
