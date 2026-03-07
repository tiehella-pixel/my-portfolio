const form = document.getElementById("contactForm");
const messageInput = document.getElementById("message"); // needed for char count if used

//for life count of message characters
  const charCount = document.getElementById("charCount");
  messageInput.addEventListener("input", function () {
  charCount.textContent = messageInput.value.length + " / 200";
  });


form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = messageInput.value.trim();
 
  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const success = document.getElementById("success");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  success.textContent = "";

  let isValid = true;

  // Name check
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email check
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Message check
  if (message === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  // Success
  if (isValid) {
    success.textContent = "Message sent successfully!";
    success.style.color = "green";
    form.reset();
  }

});