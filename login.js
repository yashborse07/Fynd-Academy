function validateForm() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "yashborse7601@gmail.com" && password == "password") {
        alert("Login Successful!");
        window.location.href = "start.html";
    } else {
        alert("Invalid username or password.");
    }
}
// var email = document.getElementById("email").value;
// if (emailRegex.test(email)) {
//     // Email is valid
// } else {
//     // Email is invalid
// }

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("email-error");
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email address";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}