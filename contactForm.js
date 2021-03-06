export function contactForm() {
  const btn = document.querySelector(".btn-contact");
  const bgForm = document.querySelector(".bg-form");
  const btnCloseForm = document.querySelector(".close-btn-modal");
  const form = document.querySelector(".form");
  const message = document.querySelector("#form-message");
  const first = document.querySelector("#first");

  //ouvrir la modal
  const openModal = () => {
    bgForm.classList.add("open");
    bgForm.ariaModal = "true";
    first.focus();
  };

  //fermer la modal
  const closeModal = () => {
    bgForm.classList.remove("open");
    bgForm.ariaModal = "false";
  };

  btn.addEventListener("click", () => {
    openModal();
  });

  btnCloseForm.addEventListener("click", () => {
    closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (!bgForm.classList.contains("open")) {
      return;
    }
    if (e.key && e.key.includes("Escape")) {
      closeModal();
    }
  });

  //vérification du prénom
  function checkFirstName() {
    const inputValueFirst = document.getElementById("first").value.trim();
    console.log("prénom: " + inputValueFirst);
    const isFirstValid = inputValueFirst.length >= 2;
    document.getElementsByClassName("error-msg")[0].style.display = isFirstValid
      ? "none"
      : "block";
    return isFirstValid;
  }

  //vérification du nom
  function checkLastName() {
    const inputValueLast = document.getElementById("last").value.trim();
    console.log("nom: " + inputValueLast);
    const isLastValid = inputValueLast.length >= 2;
    document.getElementsByClassName("error-msg")[1].style.display = isLastValid
      ? "none"
      : "block";
    return isLastValid;
  }

  //vérification de l'email avec regex
  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  function checkEmail() {
    const emailValue = document.getElementById("email").value.trim();
    const isEmailValid = isEmail(emailValue);
    console.log("email: " + emailValue);
    document.getElementsByClassName("error-msg")[2].style.display = isEmailValid
      ? "none"
      : "block";
    return isEmailValid;
  }
  //vérification du message
  function checkMessage() {
    const messageValue = message.value.trim();
    console.log("message: " + messageValue);
    const isMessageValid = messageValue.length >= 10;
    document.getElementsByClassName("error-msg")[3].style.display =
      isMessageValid ? "none" : "block";
    return isMessageValid;
  }

  form.addEventListener("submit", (e) => {
    //prévenir du comportement par défaut
    e.preventDefault();
    //vérifier si tous les champs sont valides
    let isFormValid = true;
    isFormValid = checkFirstName() && isFormValid;
    isFormValid = checkLastName() && isFormValid;
    isFormValid = checkEmail() && isFormValid;
    isFormValid = checkMessage() && isFormValid;
    if (isFormValid) {
      bgForm.classList.remove("open");

      form.reset();
      alert("message envoyé avec succès");
    }
  });
}
