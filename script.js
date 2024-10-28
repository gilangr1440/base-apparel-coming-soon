const input = document.querySelector(".form-container__input");
const button = document.querySelector(".form-container__button");
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let form = document.querySelector(".form-container");
let errorIcon = document.querySelector(".form-container__error");
let errorText = document.querySelector(".text-section__error");

button.addEventListener("click", () => {
  if (input.value == "") {
    console.log("please provide an email");
    errorText.style.color = "hsl(0, 93%, 68%)";
    errorText.innerText = "Please provide an email";

    form.classList.add("error");
    errorIcon.classList.add("true");
    errorText.classList.add("true");
  } else if (!input.value.match(regex)) {
    console.log("please provide a valid email");
    errorText.style.color = "hsl(0, 93%, 68%)";
    errorText.innerText = "Please provide a valid email";

    form.classList.add("error");
    errorIcon.classList.add("true");
    errorText.classList.add("true");
  } else if (input.value.match(regex)) {
    errorText.style.color = "hsl(0, 36%, 70%)";
    errorText.innerText = "Email added";

    errorText.classList.add("true");

    setTimeout(() => {
      location.reload();
    }, 3000);
  }
});
