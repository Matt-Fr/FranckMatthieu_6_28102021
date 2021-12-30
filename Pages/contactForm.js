export function contactForm() {
  const btn = document.querySelector(".btn-contact");
  const bgForm = document.querySelector(".bg-form");
  const btnCloseForm = document.querySelector(".close-btn-modal");
  const form = document.querySelector(".form");
  const message = document.querySelector("#form-message");

  btn.addEventListener("click", () => {
    bgForm.classList.add("open");
    bgForm.ariaModal = "true";
  });

  btnCloseForm.addEventListener("click", () => {
    bgForm.classList.remove("open");
    bgForm.ariaModal = "false";
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
    document.getElementsByClassName("error-msg")[3].style.display =
      isMessageValid ? "none" : "block";
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
}
