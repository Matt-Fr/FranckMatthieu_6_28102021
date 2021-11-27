const getPhotogra = async () => {
  const response = await fetch("./photographers.json");

  const json = await response.json();

  return json;
};
getPhotogra();

const ini = async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const id = parseInt(urlSearchParams.get("id"));

  const data = await getPhotogra();
  const photographers = data.photographers;
  const selectedPhotograph = photographers.filter(
    (photograph) => photograph.id === id
  );

  return selectedPhotograph;
};

ini();

async function displayinfo() {
  const name = document.querySelector(".photograph-name-2");
  const formTitle = document.querySelector(".title-form");
  const city = document.querySelector(".city-2");
  const tagline = document.querySelector(".tagline-2");
  const portrait = document.querySelector(".photograph-img-2");

  const photographer = await ini();
  console.log(photographer);
  name.textContent = photographer[0].name;
  formTitle.textContent = `Contactez-moi ${photographer[0].name}`;
  city.textContent = `${photographer[0].city}, ${photographer[0].country}`;
  tagline.textContent = photographer[0].tagline;
  portrait.setAttribute(
    "src",
    `./Sample Photos/Photographers ID Photos/${photographer[0].portrait}`
  );
}

displayinfo();

const btn = document.querySelector(".btn-contact");
const bgForm = document.querySelector(".bg-form");
const btnCloseForm = document.querySelector(".close-btn-modal");
const form = document.querySelector(".form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const message = document.querySelector("#form-message");

btn.addEventListener("click", () => {
  bgForm.classList.add("open");
});

btnCloseForm.addEventListener("click", () => {
  bgForm.classList.remove("open");
});

function checkFirstName() {
  const inputValueFirst = document.getElementById("first").value.trim();

  const isFirstValid = inputValueFirst.length >= 2;
  document.getElementsByClassName("error-msg")[0].style.display = isFirstValid
    ? "none"
    : "block";
  return isFirstValid;
}

function checkLastName() {
  const inputValueLast = document.getElementById("last").value.trim();

  const isLastValid = inputValueLast.length >= 2;
  document.getElementsByClassName("error-msg")[1].style.display = isLastValid
    ? "none"
    : "block";
  return isLastValid;
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function checkEmail() {
  const emailValue = document.getElementById("email").value.trim();
  const isEmailValid = isEmail(emailValue);
  document.getElementsByClassName("error-msg")[2].style.display = isEmailValid
    ? "none"
    : "block";
  return isEmailValid;
}

function checkMessage() {
  const messageValue = message.value.trim();

  const isMessageValid = messageValue.length >= 10;
  document.getElementsByClassName("error-msg")[3].style.display = isMessageValid
    ? "none"
    : "block";
  return isMessageValid;
}

//prevent form to close if errors

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;
  isFormValid = checkFirstName() && isFormValid;
  isFormValid = checkLastName() && isFormValid;
  isFormValid = checkEmail() && isFormValid;
  isFormValid = checkMessage() && isFormValid;
  if (isFormValid) {
    bgForm.classList.remove("open");

    form.reset();
  } else {
    // alert("Une erreur a été rencontrée.");
  }
});

// lightbox
