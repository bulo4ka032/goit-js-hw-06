const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const password = formElements.password.value;
  const email = formElements.email.value;

  if (!password || !email) {
    alert("All fields must be filled!");
  } else {
    const formValues = {
      email: email,
      password: password,
    };
    console.log(formValues);
    loginForm.reset();
  }
  //   const formData = new FormData();
  //   formData.forEach((name, value) => {
  //     console.log(name, value);
  //   });
}
