const message =
  "Thank you for your message. I will answer soon.";

document
  .getElementById("contactform")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });