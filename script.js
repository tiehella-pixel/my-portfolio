const form = document.getElementById("contactForm");
const messageInput = document.getElementById("message"); // needed for char count if used

//for life count of message characters
  const charCount = document.getElementById("charCount");
  messageInput.addEventListener("input", function () {
  charCount.textContent = messageInput.value.length + " / 200";
  });

//to add event listener for active link in nav 
//start by selecting all your pages sections
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

//add scroll event listerner to window
window.addEventListener("scroll", () => {

  let current = "";

  //loop through each section to check if the scroll position from the top
  //  is within the section and if so, set the current variable to the section's id
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  //loop through and remove active class from all nav links and add it to the one
  //whose href matches the current section id
  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

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