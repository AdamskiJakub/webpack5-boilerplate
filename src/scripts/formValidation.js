function validateForm() {
  const firstNameInput = document.getElementById("name");
  const firstNameError = document.getElementById("nameError");
  const familyNameInput = document.getElementById("surname");
  const familyNameError = document.getElementById("surnameError");
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("telError");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const messageInput = document.getElementById("message");
  const messageError = document.getElementById("messageError");

  firstNameError.textContent = "";
  familyNameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  const firstName = firstNameInput.value;
  const familyName = familyNameInput.value;
  const phoneName = phoneInput.value;
  const emailName = emailInput.value;
  const messageName = messageInput.value;

  if (!/^[a-zA-Z]+$/.test(firstName)) {
    firstNameError.textContent = "First Name must contain only letters.";
    return false;
  }

  if (!/^[a-zA-Z]+$/.test(familyName)) {
    familyNameError.textContent = "Family Name must contain only letters.";
    return false;
  }

  if (
    !/^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/.test(
      phoneName
    )
  ) {
    phoneError.textContent = "Invalid phone number";
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailName)) {
    emailError.textContent = "Invalid email address";
    return false;
  }

  if (messageName.length < 10) {
    messageError.textContent = "Message is too short";
    return false;
  }

  return true;
}

const sendMessageButton = document.getElementById("sendMessageButton");
sendMessageButton.addEventListener("click", function () {
  if (validateForm()) {
    alert("Form submitted successfully!");
  }
});
