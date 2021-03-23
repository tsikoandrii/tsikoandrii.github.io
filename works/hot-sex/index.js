const button = document.querySelector("#open")
const popup = document.querySelector("#popup")
const backdrop = document.querySelector("#backdrop")
const form = document.forms.form;

// Regular expression for validate email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Errors Containers
const nameFieldErrorContainer = document.querySelector("#nameWarning")
const emailFieldErrorContainer = document.querySelector("#emailWarning")

// Open popup
button.addEventListener("click", () => {
  backdrop.classList.add("visible")
  popup.classList.add("visible")
})

// Close Popup

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("visible")
  popup.classList.remove("visible")
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameFieldErrorContainer.classList.remove("visible")
  emailFieldErrorContainer.classList.remove("visible")

  const body = {
    name: form.name.value,
    email: form.email.value,
  }

  if (!body.name) {
    nameFieldErrorContainer.classList.add("visible")
  }

  if (!validateEmail(body.email)) {
    emailFieldErrorContainer.classList.add("visible")
  }



})