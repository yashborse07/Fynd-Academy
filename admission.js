var form = document.querySelector("#enquiry-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#phone").value;
  var course = document.querySelector("#course").value;
  var message = document.querySelector("#message").value;

  // Code to send the form data to your server
  // ...

  alert("Thank you for your enquiry, " + name + "! We will get back to you soon.");
});